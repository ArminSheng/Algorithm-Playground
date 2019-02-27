/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    function maxSub (nums, left, right) {
        if (left > right) return -Infinity;
        const mid = left + right >> 1;
        const l = maxSub(nums, left, mid - 1);
        const r = maxSub(nums, mid + 1, right);

        let lMax = 0;
        let rMax = 0;
        let sum = 0;
        for (let i = mid - 1; i >= left; i--) {
            sum += nums[i];
            lMax = Math.max(lMax, sum);
        }

        sum = 0;
        for (let i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rMax = Math.max(rMax, sum);
        }

        return Math.max(l, r, lMax + nums[mid] + rMax);
    }

    return maxSub(nums, 0, nums.length - 1);
}

var maxSubArray1 = function(nums) {
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
