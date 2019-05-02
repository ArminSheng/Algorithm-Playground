/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    let res = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[i]) {
                break;
            } else {
                res++;
            }
        }
    }

    return res + nums.length;
};