const testing = require("../../../helper/testing");
const high = require(".");

describe("Highest Scoring Word", () => {
  it("Testing for fixed tests", () => {
    testing(high("man i need a taxi up to ubud"), "taxi");
    testing(high("what time are we climbing up the volcano"), "volcano");
    testing(high("take me to semynak"), "semynak");
    testing(high("aa b"), "aa");
    testing(high("b aa"), "b");
    testing(high("bb d"), "bb");
    testing(high("d bb"), "d");
    testing(high("aaa b"), "aaa");
  });
});
