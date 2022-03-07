const invert = require(".");
const testing = require("../../../helper/testing");

describe("Invert array values", () => {
  it("Basic Tests", () => {
    testing(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    testing(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    testing(invert([]), []);
    testing(invert([0]), [-0]);
  });
});
