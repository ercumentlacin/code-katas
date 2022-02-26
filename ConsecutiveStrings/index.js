/**
 *
 * @param {String[]} strarr
 * @param {Number} k
 */
function longestConsec(strarr, k) {
  if (!strarr.length || k > strarr.length || k <= 0) return '';

  let result = '';

  for (let i = 0; i < strarr.length; i += 1) {
    const wordsSumLength = strarr
      .slice(i, i + k)
      .reduce((total, word) => total + word.length, 0);
    wordsSumLength > result.length &&
      (result = strarr.slice(i, i + k).join(''));
  }

  return result;
}

// full reduce
function longestConsec(strarr, k) {
  if (!strarr.length || k > strarr.length || k <= 0) return '';

  return strarr.reduce((result, _, index) => {
    const wordsSumLength = strarr
      .slice(index, index + k)
      .reduce((total, word) => total + word.length, 0);

    wordsSumLength > result.length &&
      (result = strarr.slice(index, index + k).join(''));
    return result;
  }, '');
}

let textArr = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'];
console.log(longestConsec(textArr, 2), 'abigailtheta');

textArr = [
  'ejjjjmmtthh',
  'zxxuueeg',
  'aanlljrrrxx',
  'dqqqaaabbb',
  'oocccffuucccjjjkkkjyyyeehh',
];
console.log(longestConsec(textArr, 1) == 'oocccffuucccjjjkkkjyyyeehh');

textArr = [0];
console.log(longestConsec(textArr, 3) == '');

textArr = [
  'itvayloxrp',
  'wkppqsztdkmvcuwvereiupccauycnjutlv',
  'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
];
let expected =
  'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck';
console.log(longestConsec(textArr, 2) == expected);

textArr = ['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'];
console.log(longestConsec(textArr, 2) == 'wlwsasphmxxowiaxujylentrklctozmymu');

textArr = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'];
console.log(longestConsec(textArr, -2) == '');

textArr = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'];
console.log(longestConsec(textArr, 3) == 'ixoyx3452zzzzzzzzzzzz');

textArr = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'];
console.log(longestConsec(textArr, 15) == '');

textArr = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'];
console.log(longestConsec(textArr, 0) == '');
