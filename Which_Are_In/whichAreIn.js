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

// with reduce
function inArray(array1, array2) {
  return array1
    .reduce((result, word) => {
      array2.some((innerWord) => {
        if (innerWord.indexOf(word) > -1 && !result.includes(word)) {
          result.push(word);
        }
      });
      return result;
    }, [])
    .sort();
}

let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
let a1 = ['xyz', 'live', 'strong'];

console.log(inArray(a1, a2), ['live', 'strong']);

a1 = ['live', 'strong', 'arp'];

console.log(inArray(a1, a2), ['arp', 'live', 'strong']);

a1 = ['tarp', 'mice', 'bull'];

console.log(inArray(a1, a2), []);
