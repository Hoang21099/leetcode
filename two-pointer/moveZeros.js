/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let arr = [];
  nums.forEach((item, index) => {
    if (item != 0) {
      arr.push(item);
    }
    nums[index] = 0;
  });

  arr.forEach((item, index) => (nums[index] = item));
  // let i = 0;
  // let j = i+1;
  // while(i < nums.length){
  //     if(nums[j])
  // }
};

var moveZeroesV2 = function (nums) {
  // let arr = [];

  let i = 0;
  let j = i + 1;
  while (i < nums.length && j < nums.length) {
    if (nums[j] === 0) {
      j++;
    }

    if (nums[i] != 0) {
      i++;
    }

    if (i < j && j < nums.length && i < nums.length) {
      if (!nums[i]) {
        const temp = nums[j];
        nums[j] = nums[i];

        nums[i] = temp;
      }
    }
    j++;

  }

  return nums;
};

console.log(moveZeroesV2([0, 0, 2, 3]));
console.log(moveZeroesV2([1, 0, 2, 3]));
console.log(moveZeroesV2([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
