/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let res = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (sum < 0 && nums[i] > sum) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }

        if (sum > res) res = sum;
    }

    return res;
}

var maxSubArray2 = function(nums) {
    let res = Math.max(...nums);
    const dp = [];

    for (let i = 0, len = nums.length; i < len; i++) {
        dp[i] = nums[i];

        for (let j = i + 1; j < len; j++) {
            dp[j] = dp[j - 1] + nums[j];
            if (dp[j] > res) {
                res = dp[j];
            }
        }
    }
    
    return res;
};
