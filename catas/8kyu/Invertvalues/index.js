function invert(array) {
  return array.reduce((result, number) => [...result, number * -1], []);
}

module.exports = invert;
