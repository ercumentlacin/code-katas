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

console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
  'abigailtheta'
);
console.log(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1
  ) == 'oocccffuucccjjjkkkjyyyeehh'
);
console.log(longestConsec([], 3) == '');
console.log(
  longestConsec(
    [
      'itvayloxrp',
      'wkppqsztdkmvcuwvereiupccauycnjutlv',
      'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
    ],
    2
  ) == 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
);
console.log(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2) ==
    'wlwsasphmxxowiaxujylentrklctozmymu'
);
console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2) == ''
);
console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3) ==
    'ixoyx3452zzzzzzzzzzzz'
);
console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15) == ''
);
console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0) == ''
);
