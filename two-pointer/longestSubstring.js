/** 3. Longest Substring Without Repeating Characters
 * 
 * Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let long = 0;

  let map = {};

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]) {
      left = Math.max(left, map[s[right]]);
    }

    long = Math.max(long, right - left + 1);

    map[s[right]] = right + 1;
  }
  
  return long;
};

// The big O is O(n) because we only loop through the string once
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
