const towerBuilder = require(".");

describe("BuildTower", () => {
  test('if parameter is 1, output should be ["*"]', () => {
    expect(towerBuilder(1)).toEqual(["*"]);
  });

  test('if parameter is 2, output should be [" * ", "***"]', () => {
    expect(towerBuilder(2)).toEqual([" * ", "***"]);
  });

  test('if parameter is 3, output should be ["  *  ", " *** ", "*****"]', () => {
    expect(towerBuilder(3)).toEqual(["  *  ", " *** ", "*****"]);
  });
});
