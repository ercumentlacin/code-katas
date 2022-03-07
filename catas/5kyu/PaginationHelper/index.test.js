const PaginationHelper = require(".");

describe("PaginationHelper", () => {
  let helper;
  beforeEach(() => {
    helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
  });

  test("should be defined", () => {
    expect(PaginationHelper).toBeDefined();
  });

  test("page count  muste be 2", () => {
    expect(helper.pageCount()).toBe(2);
  });

  test("item count must be 6", () => {
    expect(helper.itemCount()).toBe(6);
  });

  test("if the parameter is 2 the page item count shpuld be 0", () => {
    expect(helper.pageItemCount(0)).toBe(4);
  });

  test("if the parameter is 1 the page item count shpuld be 2", () => {
    expect(helper.pageItemCount(1)).toBe(2);
  });

  test("if the parameter is 2 the page item count shpuld be -1", () => {
    expect(helper.pageItemCount(2)).toBe(-1);
  });

  test("if the parameter is 5, page index should be 1", () => {
    expect(helper.pageIndex(5)).toBe(1);
  });

  test("if the parameter is 2, page index should be 0", () => {
    expect(helper.pageIndex(2)).toBe(0);
  });

  test("if the parameter is 20, page index should be -1", () => {
    expect(helper.pageIndex(20)).toBe(-1);
  });

  test("if the parameter is -10, page index should be -1", () => {
    expect(helper.pageIndex(-10)).toBe(-1);
  });
});
