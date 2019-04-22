/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let j = nums[0];
    let i = 0;

    while (k) {
        if (!nums[i] || nums[i] !== j) {
            k--;
            j++;
        } else {
            i++;
            j++;
        }
    }

    return j - 1;
};