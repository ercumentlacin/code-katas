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

module.exports = countPositivesSumNegatives;
