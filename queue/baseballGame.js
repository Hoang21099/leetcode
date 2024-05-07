/**   */
var main = (ops) => {
  let result = 0;

  const listNumber = [];

  for (let item of ops) {
    if (item === "+") {
      let numberOne = listNumber[listNumber.length - 2];
      let numberTwo = listNumber[listNumber.length - 1];

      listNumber.push(numberOne + numberTwo);
    } else if (item === "D") {
      let numberOne = listNumber[listNumber.length - 1];

      listNumber.push(numberOne * 2);
    } else if (item === "C") {
      listNumber.pop();
    } else {
      listNumber.push(+item);
    }
  }

  result = listNumber.reduce((pre, cur) => pre + cur, 0);

  return result;
};

console.log(main(["5", "2", "C", "D", "+"]));
console.log(main(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(main(["1"]));
