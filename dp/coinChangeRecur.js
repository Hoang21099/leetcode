let skip = {};
// var coinChange = (arr, rs, temp) => {
//   if (rs == 0) {
//     // if (skip[rs + temp]) {
//     //   return 0;
//     // }

//     // // console.log(rs, rs + temp);

//     skip[rs + temp] = 1;
//     console.log("rs ", rs + temp);
//     return 1;
//   }
//   if (rs < 0) {
//     return 0;
//   }
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const c = arr[i];
//     result += coinChange(arr, rs - c, c);
//   }

//   return result;
// };

var coinChangeV2 = (arr, n, target) => {
  console.log(target);
  if (n <= 0 || target < 0) {
    return 0;
  }
  if (target === 0) {
    return 1;
  }

  return (
    coinChangeV2(arr, n - 1, target) + coinChangeV2(arr, n, target - arr[n - 1])
  );
};

console.log(coinChangeV2([ 1,2,3], 3, 5));
