/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const l = nums.length;
    if (!l) return [];

    const dp = Array(l).fill(0).map(_ => []);
    let res = [nums[0]];

    for (let i = 0; i < l; i++) {
        for (let j = i; j < l; j++) {
            if (j === i) {
                dp[i][j] = [nums[i]];
                continue;
            }

            const arr = dp[i][j - 1];
            const len = arr.length;

            if (nums[j] % arr[len - 1] === 0) {
                arr.push(nums[j]);
                if (arr.length > res.length) {
                    res = arr;
                }
            }

            dp[i][j] = arr;
        }
    }

    return res;
};