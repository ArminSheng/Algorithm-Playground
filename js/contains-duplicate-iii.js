/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= (i + k) && j < len; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }

    return false;
};