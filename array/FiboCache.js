function fib(n) {
  const memorize = {};

  let i = 0;

  function helper(n, parent) {
    console.log( n, ' parent: ', parent)
    // if (n in memorize) return memorize[n];
    if (n < 3) return 1;
    return helper(n - 1, n) + helper(n - 2, n);
  }

  return helper(n);
}

const start = Date.now();

const a = fib(5);
// console.log(a);
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
