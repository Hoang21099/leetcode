/**
given a string s containing just the characters '{', '}', '(',')' , '[',']', determine if the input string is valid.
An input string is valid if:
open brackets must be closed by the same type of brackets
open brackets must be closed in the correct order
 */

var main = (str) => {
  let closeBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  let listOpenBrackets = []; // use Stack

  const arr = str.split("");

  for (const index in arr) {
    const s = arr[index];
    if (!index && closeBrackets[s]) {
      return "invalid";
    }

    if (
      closeBrackets[s] &&
      listOpenBrackets[listOpenBrackets.length - 1] != closeBrackets[s]
    ) {
      return "invalid";
    }

    if (closeBrackets[s]) {
      listOpenBrackets.pop();
    } else {
      listOpenBrackets.push(s);
    }
  }

  return listOpenBrackets?.length ? "invalid" : "valid";
};


console.log(main('{(})'))