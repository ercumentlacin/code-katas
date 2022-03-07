function getAverage(marks) {
  return Math.floor(
    marks.reduce((total, mark) => total + mark, 0) / marks.length
  );
}

module.exports = getAverage;
