/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const d = {}
    if (t < 0) return false;
    const n = nums.length;
    let w = t + 1;



    for (let i = 0; i < nums.length; i++) {
        const m = nums[i] / w

        if (d[m]) return true;

        if (d[m - 1] && Math.abs(nums[i] - d[m - 1]) < w) return true;

        if (d[m + 1] && Math.abs(nums[i] - d[m + 1]) < w) return true;

        d[m] = nums[i]

        if (i >= k) {
            delete d[nums[i - k] / w]
        }
    }

    return false
};