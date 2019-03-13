/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums.length) return 0;
    const dp = [nums[0]];
    let acc = nums[0];
    let res = -Infinity;

    for (let i = 1; i < nums.length; i++) {
        acc = nums[i - 1] === 0 ? nums[i] : acc * nums[i];
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] * nums[i] : nums[i];
        res = Math.max(res, dp[i], acc);
    }

    return res;
};