/**14. Longest Common Prefix
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let length = Math.min(...strs.map((item) => item.length));

  let result = "";

  for (let i = 0; i < length; i++) {
    let isDup = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        isDup = false;
        break;
      }
    }

    if (!isDup) return result;

    result += strs[0][i];
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["dog", "dog", "dog"])); // "dog"
console.log(longestCommonPrefix(["a", "ab"])); // "dog"
console.log(longestCommonPrefix(["a"])); // "dog"
