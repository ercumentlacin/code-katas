function invert(array) {
  const multiplyNegativeOne = (number) => number * -1;
  return array.map(multiplyNegativeOne);
}

// with reducer
function invert(array) {
  return array.reduce((result, number) => [...result, number * -1], []);
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);
