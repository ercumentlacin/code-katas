const past = require(".");

describe("Beginner Seriest 2 Clock", () => {
  test("result should be equal to 61000", () => {
    expect(past(0, 1, 1)).toBe(61000);
  });

  test("result should be equal to 3661000", () => {
    expect(past(1, 1, 1)).toBe(3661000);
  });

  test("result should be equal to 0", () => {
    expect(past(0, 0, 0)).toBe(0);
  });

  test("result should be equal to 3601000", () => {
    expect(past(1, 0, 1)).toBe(3601000);
  });

  test("result should be equal to 3600000", () => {
    expect(past(1, 0, 0)).toBe(3600000);
  });
});
