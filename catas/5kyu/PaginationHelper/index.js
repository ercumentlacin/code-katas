// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const pages = this.collection.reduce((acc, val, index) => {
    if (index % this.itemsPerPage === 0) {
      acc.push([val]);
    } else {
      acc[Math.floor(index / this.itemsPerPage)].push(val);
    }
    return acc;
  }, []);
  return pageIndex < pages.length ? pages[pageIndex].length : -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0) return -1;

  const page = Math.floor(itemIndex / this.itemsPerPage);
  if (this.pageCount() === 0) return -1;
  return page <= this.pageCount() ? page : -1;
};

module.exports = PaginationHelper;
