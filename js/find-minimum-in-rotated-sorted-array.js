/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let mid, lo = 0; hi = nums.length - 1;

    if (nums[lo] <= nums[hi]) return nums[0];

    while (lo < hi) {
        mid = lo + hi >> 1;

        if (nums[mid] > nums[lo]) {
            lo = mid;
        } else {
            hi = mid;
        }
    }

    return nums[lo + 1];
};