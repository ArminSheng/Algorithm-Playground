/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(robI(nums.slice(1)), robI(nums.slice(0, nums.length - 1)));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var robI = function(nums) {
    const len = nums.length;
    const dp = [nums[0], Math.max(nums[1], nums[0])];

    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[len - 1] || 0;
};