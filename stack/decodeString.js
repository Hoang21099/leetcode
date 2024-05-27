/**394. Decode String
 * Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char !== "]") {
      stack.push(char);
    } else {
      let tempString = "";
      let count = "";
      while (stack[stack.length - 1] !== "[") {
        tempString = stack.pop() + tempString;
      }

      if (stack[stack.length - 1] === "[") stack.pop();

      while (!isNaN(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }

      let decodedString = "";

      for (let j = 0; j < +count; j++) {
        decodedString += tempString;
      }

      stack.push(decodedString);
    }
  }
  return stack.join("");
};
// Time complexity is O(n) where n is the length of the input string s.
// Space complexity is O(n) where n is the length of the input string s.
/**
 * Iteration through String:
The outer for loop iterates through each character of the input string s exactly once. This contributes a time complexity of O(n), where n is the length of the input string.
Operations Inside the Loop:
Inside the loop, we have two while loops:
The first while loop iterates until it encounters a [ character, popping characters from the stack and forming a temporary string. In the worst case, if there is no [ character, this loop may iterate through the entire string. 
However, since each character is pushed and popped from the stack at most once, the total number of iterations across all characters is still proportional to the length of the input string. 
Therefore, this loop also contributes O(n) time complexity.
The second while loop similarly iterates until it encounters a non-digit character, extracting a count. Like the first while loop, the total number of iterations is proportional to the length of the input string. Thus, it also contributes O(n) time complexity.
Concatenating strings inside the loop (decodedString += tempString) could potentially be an O(m) operation, where m is the length of tempString. However, since the length of tempString is bounded by the length of the input string, the overall time complexity of string concatenation across all iterations is still proportional to the length of the input string, or O(n).
Total Time Complexity:
Considering the iterations through the input string and the operations inside the loop, all of which are proportional to the length of the input string, the total time complexity of the code remains O(n), where n is the length of the input string. */

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
