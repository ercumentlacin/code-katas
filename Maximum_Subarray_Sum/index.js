function maxSequence(arr) {
  let result = 0;
  const areAllPositive = arr.every((number) => number >= 0);

  if (!arr.length) return 0;
  if (areAllPositive) return arr.reduce((sum, number) => sum + number, 0);

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      result = Math.max(result, sum, ...arr);
    }
  }

  return result;
}

// with Array.prototype.reduce
function maxSequence(arr) {
  let currentSum = 0;

  return arr.reduce((total, number) => {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, total);
  }, 0);
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([-43, 40]), 40);
