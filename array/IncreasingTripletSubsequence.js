/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function (nums) {
//   for (let i = 0; i < nums.length - 2; i++) {
//     let count = 0;
//     let pre = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log(i, j, nums[j], pre);

//       if (pre > nums[j] && nums[j] > nums[i]) {
//         pre = nums[j];
//       } else if (nums[j] > pre) {
//         count += 1;
//         pre = nums[j];
//       }

//       if (count === 2) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

var increasingTriplet = function (nums) {
  let a = 99999999;
  let b = 99999999;

  for (let num of nums) {
    if (num <= a) {
      a = num;
    } else if (num <= b) {
      b = num;
    } else {
      console.log(num)
      return true;
    }
  }

  return false;
};

// console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]));
console.log(increasingTriplet([1,0,3,4]));
// console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]));
