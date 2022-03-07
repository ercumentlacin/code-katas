/**
 *
 * @param {String[]} array1
 * @param {String[]} array2
 * @returns
 */
function inArray(array1, array2) {
  const result = [];

  array1.forEach((outterWord) => {
    array2.forEach((innerWord) => {
      if (innerWord.includes(outterWord)) {
        result.push(outterWord);
      }
    });
  });

  return [...new Set(result)].sort();
}

module.exports = inArray;
