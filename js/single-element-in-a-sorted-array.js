/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let lo = 0;
    let hi = nums.length;
    let mid;

    while (lo < hi - 1) {
        mid = lo + hi >> 1;
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid - 1]) {
                hi = mid;
            } else {
                lo = mid;
            }
        } else {
            if (nums[mid] !== nums[mid - 1]) {
                hi = mid;
            } else {
                lo = mid;
            }
        }
    }

    return nums[lo] || 0;
};