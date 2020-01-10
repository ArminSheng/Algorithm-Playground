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
                dp[i][j] = dp[i][j - 1].concat([nums[j]]);

                if (dp[i][j].length > res.length) {
                    res = dp[i][j];
                }
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    for (let i = 1; i < l; i++) {
        for (let j = 0; j < i; j++) {
            const arr = dp[0][j];
            const n = arr[arr.length - 1];
            if (nums[i] % n === 0) {
                const t = arr.concat(dp[i][l - 1]);
                if (t.length > res.length) {
                    res = t;
                }
            }
        }
    }

    return res;
};