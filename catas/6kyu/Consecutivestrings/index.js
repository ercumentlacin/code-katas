/**
 *
 * @param {String[]} strarr
 * @param {Number} k
 */
function longestConsec(strarr, k) {
  if (!strarr.length || k > strarr.length || k <= 0) return "";

  let result = "";

  for (let i = 0; i < strarr.length; i += 1) {
    const wordsSumLength = strarr
      .slice(i, i + k)
      .reduce((total, word) => total + word.length, 0);
    wordsSumLength > result.length &&
      (result = strarr.slice(i, i + k).join(""));
  }

  return result;
}

module.exports = longestConsec;
