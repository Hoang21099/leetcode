/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp = {};

  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]]) {
      return true;
    }
    temp[nums[i]] = true;
  }

  return false;
};
