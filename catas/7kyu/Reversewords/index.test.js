const testing = require("../../../helper/testing.js");
const reverseWords = require(".");

describe("Reverse words", () => {
  it("Testing for fixed tests", () => {
    testing(
      reverseWords("The quick brown fox jumps over the lazy dog."),
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
    testing(reverseWords("apple"), "elppa");
    testing(reverseWords("a b c d"), "a b c d");
    testing(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
  });
});
