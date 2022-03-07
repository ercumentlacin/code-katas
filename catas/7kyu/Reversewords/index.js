const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

const reverseWords = (str) =>
  str
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");

module.exports = reverseWords;
