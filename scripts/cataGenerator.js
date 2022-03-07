const puppeteer = require("puppeteer");
const fs = require("fs");
const argv = require("yargs").argv;

function generateIndexAndReadme({
  title,
  description,
  cataLink,
  solution,
  exportName,
}) {
  const [parsedLink] = cataLink.split("/train/");

  const readmeSource = `# ${title}

## Description

${description}

## Examples

## Notes

* Kata link: ${parsedLink}
* Discussion link: ${parsedLink}/discuss
* Solution: ${solution}
`;

  const indexSource = `
${solution}

module.exports = ${exportName};
`;

  return {
    readmeSource,
    indexSource,
  };
}

function generateIndexTest({ exportName, tests }) {
  return `const ${exportName} = require('.')
    ${tests}
  `;
}

async function main(cataLink) {
  const browserOptions = {
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  };
  const browser = await puppeteer.launch(browserOptions);
  const page = await browser.newPage();

  page.on("console", (msg) => console.log(msg.text()));

  await page.goto(cataLink, { waitUntil: "networkidle0" });

  const data = await page.evaluate(() => {
    const result = {};
    const container = document.querySelector("#cc_play_view");

    const $ = (selector) => container.querySelector(selector);
    const $$ = (selector) => container.querySelectorAll(selector);

    const lineJoiner = (solution, line) => `${solution}${line.textContent}\n`;

    result.kyu = $(".inner-small-hex.is-extra-wide").textContent;
    result.title = $("h4").textContent;

    result.description = $(".markdown").innerHTML;
    const preTagStartIndex = result.description.indexOf("<pre>");
    const preTagEndIndex = result.description.indexOf("</pre>");
    result.description =
      result.description.substring(0, preTagStartIndex) +
      result.description.substring(preTagStartIndex + 5, preTagEndIndex);

    result.solution = [...$$("div#code_container .CodeMirror-line")].reduce(
      lineJoiner,
      ""
    );
    result.tests = [...$$("div#fixture_container pre.CodeMirror-line")].reduce(
      lineJoiner,
      ""
    );

    if (result.solution.includes("prototype")) {
      result.exportName = result.solution.split(".prototype")[0];
    } else if (result.solution.includes("= function")) {
      result.exportName = result.solution
        .split("=")[0]
        .trim()
        .replace("var ", "");
    } else if (result.solution.includes("function")) {
      result.exportName = result.solution.split("function ")[1].split("(")[0];
    }

    return { ...result };
  });

  const { title, kyu } = data;

  const { readmeSource, indexSource } = generateIndexAndReadme({
    ...data,
    cataLink,
  });
  const indexTest = generateIndexTest({ ...data });

  const domain = `catas/${kyu}/${title}/`.replace(/\s+/g, "");
  await fs.promises
    .mkdir(`${domain}`, { recursive: true })
    .then(() => {
      fs.promises.writeFile(`${domain}/index.js`, indexSource, "utf8");
      fs.promises.writeFile(`${domain}/README.md`, readmeSource, "utf8");
      fs.promises.writeFile(`${domain}/index.test.js`, indexTest, "utf8");
    })
    .then(() => console.log(`Kata created under ${kyu}/${title}`))
    .catch((error) => console.log(error));

  await fs.promises.readFile(`README.md`, "utf8").then((data) => {
    const newRow = `| ${title}                  | [Link](/${domain}index.js)                | [Link](${cataLink}) | ${kyu}   |`;
    const newReadme = data + newRow;

    fs.promises.writeFile("README.md", newReadme, "utf8");
  });

  await browser.close();
}

try {
  main(argv.link);
} catch (error) {
  console.log("Should include a link");
}
