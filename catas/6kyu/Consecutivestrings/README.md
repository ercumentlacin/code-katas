# Consecutive strings

## Description

<p>You are given an array(list) <code>strarr</code> of strings and an integer <code>k</code>. Your task is to return the <strong>first</strong> longest string
consisting of k <strong>consecutive</strong> strings taken in the array.</p>
<h4 id="examples">Examples:</h4>
<code>strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling (length 10) concatenation of strarr[0] and strarr[1]
folingtrashy (" 12) concatenation of strarr[1] and strarr[2]
trashyblue (" 10) concatenation of strarr[2] and strarr[3]
blueabcdef (" 10) concatenation of strarr[3] and strarr[4]
abcdefuvwxyz (" 12) concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --&gt; "abigailtheta"
</code>

## Examples

## Notes

- Kata link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
- Discussion link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/discuss
- Solution: function longestConsec(strarr, k) {
  // your code
  }
