/* eslint-disable no-control-regex */
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const regex = {
  javascript: /^```(?:js|javascript)\n([\s\S]*?)```$/gm,
  codeBlocks: /^```([\s\S]*?)\n([\s\S]*)```$/gm,
  folderName: new RegExp(
    '^(?!^(PRN|AUX|CLOCK$|NUL|CON|COMd|LPTd|..*)(..+)?$)[^\x00-\x1f\\?*:";|/]+$',
    "g"
  ),
  scriptTag: /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g,
};

async function createCata(cataLink) {
  const { data } = await axios.get(cataLink);
  const $ = cheerio.load(data, { xmlMode: true });
  const result = {};

  // Get the title
  $("h4").each((i, elem) => {
    if (i === 1) {
      result.title = $(elem).text();
    }
  });

  // Get the kyu
  result.kyu = $(".inner-small-hex.is-extra-wide span").text().split(" ")[0];

  // Get the description
  const scriptTag = data.match(regex.scriptTag)[10];

  result.description = /\\"description\\":\\"(.*?)"/m
    .exec(scriptTag)[1]
    .replace(/\\\\n/g, "\n");

  let codeBlocks = regex.codeBlocks.exec(result.description);
  const javascriptCodeBlock = regex.javascript.exec(codeBlocks?.[0])?.[0];

  result.description = result.description
    .replace(codeBlocks?.[0], javascriptCodeBlock)
    .replace(/\\$/m, "");

  if (!regex.folderName.test(result.title)) {
    result.title = result.title.replace(regex.folderName, "-");
  }

  result.folderName = result.title;

  if (result.title.split(" ").length > 1) {
    result.folderName = result.title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_");
  }
  // console.log(data);

  console.log($(".CodeMirror-code").toString());

  fs.mkdir(`./cata/${result.folderName}`, { recursive: true }, (err) => {
    if (err) {
      return console.log(err);
    }
    fs.writeFileSync(
      `./cata/${result.folderName}/README.md`,
      `# ${result.title}\n\n${result.description}`,
      "utf8"
    );
  });
}

let url =
  "https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript";

url = "https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript";
createCata(url);
