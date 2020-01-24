/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const n = nums.length;
    const dp = this.dp = [nums[0]];

    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    const dp = this.dp;
    if (i <= 0) return dp[j];
    return dp[j] - dp[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */