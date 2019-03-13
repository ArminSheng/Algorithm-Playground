/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums.length) return 0;

    const max = function (nums) {
        const dp = nums.slice();

        for (let i = 1; i < nums.length; i++) {
            dp[i] *= dp[i - 1] || 1;
        }

        return Math.max(...dp);
    }

    return Math.max(max(nums), max(nums.reverse()));
};


var maxProduct1 = function(nums) {
    const len = nums.length;
    if (!len) return 0;

    let acc = nums[0];
    let res = acc;
    let max = acc;

    for (let i = 1; i < len; i++) {
        acc = nums[i - 1] === 0 ? nums[i] : acc * nums[i];
        max = max > 0 ? max * nums[i] : nums[i];
        res = Math.max(res, max, acc);
    }

    acc = nums[len - 1];
    max = acc;
    for (let i = len - 2; i > 0; i--) {
        acc = nums[i + 1] === 0 ? nums[i] : acc * nums[i];
        max = max > 0 ? max * nums[i] : nums[i];
        res = Math.max(res, max, acc);
    }

    return res;
};