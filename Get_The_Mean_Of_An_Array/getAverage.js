function getAverage(marks) {
  return Math.floor(
    marks.reduce((total, mark) => total + mark, 0) / marks.length
  );
}

// for loop
function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}

// for of loop
function getAverage(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
