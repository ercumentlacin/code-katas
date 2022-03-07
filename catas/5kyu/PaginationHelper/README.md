# PaginationHelper

## Description

<p>For this exercise you will be strengthening your page-fu mastery.  You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array. </p>
<p>The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant. </p>
<p>The following are some examples of how this class is used:</p>
<code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">helper</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">PaginationHelper</span>([<span class="cm-string">'a'</span>,<span class="cm-string">'b'</span>,<span class="cm-string">'c'</span>,<span class="cm-string">'d'</span>,<span class="cm-string">'e'</span>,<span class="cm-string">'f'</span>], <span class="cm-number">4</span>);
<span class="cm-variable">helper</span>.<span class="cm-property">pageCount</span>(); <span class="cm-comment">//should == 2</span>
<span class="cm-variable">helper</span>.<span class="cm-property">itemCount</span>(); <span class="cm-comment">//should == 6</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageItemCount</span>(<span class="cm-number">0</span>); <span class="cm-comment">//should == 4</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageItemCount</span>(<span class="cm-number">1</span>); <span class="cm-comment">// last page - should == 2</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageItemCount</span>(<span class="cm-number">2</span>); <span class="cm-comment">// should == -1 since the page is invalid</span>

<span class="cm-comment">// pageIndex takes an item index and returns the page that it belongs on</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageIndex</span>(<span class="cm-number">5</span>); <span class="cm-comment">//should == 1 (zero based index)</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageIndex</span>(<span class="cm-number">2</span>); <span class="cm-comment">//should == 0</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageIndex</span>(<span class="cm-number">20</span>); <span class="cm-comment">//should == -1</span>
<span class="cm-variable">helper</span>.<span class="cm-property">pageIndex</span>(<span class="cm-operator">-</span><span class="cm-number">10</span>); <span class="cm-comment">//should == -1</span>
</code>

## Examples

## Notes

- Kata link: https://www.codewars.com/kata/515bb423de843ea99400000a
- Discussion link: https://www.codewars.com/kata/515bb423de843ea99400000a/discuss
- Solution: // TODO: complete this object/class
  ​
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  function PaginationHelper(collection, itemsPerPage){

}
​
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {

}
​
// returns the number of pages
PaginationHelper.prototype.pageCount = function() {

}
​
// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
