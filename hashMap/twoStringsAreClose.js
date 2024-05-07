// 1657. Determine if Two Strings Are Close
// Medium
// Topics
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// var closeStrings = function (word1, word2) {
//   if (word1.length !== word2.length) {
//     return false;
//   }

//   let map1 = {};
//   let map2 = {};

//   for (let w in word1) {
//     map1[word1[w]] = (map1[word1[w]] || 0) + 1;

//     map2[word2[w]] = (map2[word2[w]] || 0) + 1;
//   }

//   const arr1 = Object.values(map1).sort();
//   const arr2 = Object.values(map2).sort();

//   const listKey1s = Object.keys(map1);
//   const listKey2s = Object.keys(map1);

//   for (let i in listKey1s) {
//     if (!map1[listKey2s[i]] || !map2[listKey1s[i]] || arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let w in word1) {
    map1[word1[w]] = (map1[word1[w]] || 0) + 1;

    map2[word2[w]] = (map2[word2[w]] || 0) + 1;
  }

  const arr1 = Object.values(map1).sort();
  const arr2 = Object.values(map2).sort();

  const listKey1s = Object.keys(map1);
  const listKey2s = Object.keys(map1);

  for (let i in listKey1s) {
    if (!map1[listKey2s[i]] || !map2[listKey1s[i]] || arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

class Solution {
  closeStrings(word1, word2) {
    const length = word1.length;
    if (length !== word2.length) return false;

    const char1 = {};
    const char2 = {};

    this.process(char1, word1);
    this.process(char2, word2);

    const arr1 = Object.values(char1).sort();
    const arr2 = Object.values(char2).sort();

    for (let i = 0; i < 26; i++) {
      if (
        (char1[i] && !char2[i]) ||
        (!char1[i] && char2[i]) ||
        arr1[i] !== arr2[i]
      ) {
        return false;
      }
    }

    return true;
  }

  process(chars, word) {
    for (let w of word) {
      const code = w.charCodeAt(0) - 97;
      chars[code] = (chars[code] || 0) + 1;
    }
  }
}

let ab = new Solution();

console.log(ab.closeStrings("abc", "bxa"));
console.log(ab.closeStrings("cabbba", "abbccc"));
console.log(ab.closeStrings("abbzzca", "babzzcz"));
