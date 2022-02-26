function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];

  return input.reduce(
    ([countPositives, sumNegatives], num) => {
      if (num > 0) {
        countPositives += 1;
      } else {
        sumNegatives += num;
      }
      return [countPositives, sumNegatives];
    },
    [0, 0]
  );
}

// with forEach
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];

  let [countPositives, sumNegatives] = [0, 0];
  input.forEach((num) => {
    if (num > 0) {
      countPositives += 1;
    } else {
      sumNegatives += num;
    }
  });
  return [countPositives, sumNegatives];
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
let expected = [10, -65];
console.log(actual, expected);

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];
console.log(actual, expected);
