/**
 * Write a function function solution(x, y) that, given a string x and a string y, returns a boolean that checks whether all of the characters in the string y exist at some point in the string x.
Furthermore, the characters from y need to occur in the same order in x. There may be additional characters in string x, so long as each character from y appears and the order is maintained.
If all of the characters from y appear in x in the correct order return the boolean true, otherwise return false
Both of the input strings will consist of alpha-numeric characters only. The length of the strings may be quite large so performance should be a consideration for your solution.
Example 1
x = " ABCD"
y = "AC"
Result = true
The expected result is true because "A" and "C" both appear in "ABCD" and in that order.
Example 2
x = "ABCD"
y = "CA"
Result = false
The expected result if false because even though "C" and "A" both appear in "ABCD" the order is in x is different to y.
Example 3
x = "ABCAD"
y = "ВА"
Result = true */

var solution = (x, y) => {
  if (y.length > x.length) return false;

  let startIndex = x.split("").indexOf(y[0]);

  if (startIndex === -1) return false;

  if (y.length === 1) return true;

  let index = 0;

  let stack = [y[0]];

  if (y.length > 1) {
    index += 1;
  }

  for (let right = startIndex + 1; right < x.length; right++) {
    if (x[right] === y[index] && stack[stack.length - 1] !== y[index]) {
      stack.push(x[right]);
    }

    if (stack.length === y.length) {
      return true;
    }
  }

  return false;
};

console.log(solution("CABCD", "AC")); // true
console.log(solution("ABCAD", "BA")); // true
console.log(solution("ABCAD", "D")); // true
console.log(solution("ABCAD", "DA")); // false
