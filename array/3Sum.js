/*
 * @lc app=leetcode id=15 lang=java
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.86%)
 * Likes:    4127
 * Dislikes: 475
 * Total Accepted:    595.1K
 * Total Submissions: 2.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

let count = 0;

function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    count++;
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) r = mid - 1;
    // Else the element can only be present
    // in right subarray
    else l = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
}

function ThreeSum(arr) {
  arr.sort((a, b) => a - b);

  const result = [];
  const temp = {};

  for (let i = 0; i <= arr.length - 3; i++) {
    count++;
    const sub = 0 - arr[i];
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 1; j++) {
      count++;
      const k = binarySearch(arr.slice(j + 1, arr.length), sub - arr[j]);

      const thirdNum = arr[k + j + 1];

      if (temp[`${arr[i]}- ${arr[j]}`]) continue;
      temp[`${arr[i]}- ${arr[j]}`] = 1;

      if (k !== -1) {
        result.push([arr[i], arr[j], arr[k + j + 1]]);
      }
    }
  }

  console.log(result);
  console.log(result.length);
  console.log(count);
}

function ThreeSumV2(arr) {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i <= arr.length - 3; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum == 0) {
        result.push([arr[i], arr[j], arr[k]]);

        // skip duplicate elements for j
        while (j < k && arr[j] === arr[j + 1]) {

          j++;
        }

        //skip duplicate elements for k
        while (j < k && arr[k] === arr[k - 1]) {

          k--;
        }

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

}

ThreeSumV2([
  34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57,
  -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47,
  61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
]);
