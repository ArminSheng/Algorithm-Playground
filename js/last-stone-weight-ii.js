/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((acc, cur) => acc + cur, 0);
    const len = stones.length;
    const target = sum >> 1;
    const dp = Array(len + 1).fill(0).map(_ => Array(target + 1).fill(0));
    let val = 0;

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= target; j++) {
            if (stones[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                const v1 = dp[i - 1][j];
                let v2 = dp[i - 1][j - stones[i - 1]] + stones[i - 1];
                dp[i][j] = Math.max(v1, v2);
            }

            val = Math.max(val, dp[i][j]);
        }
    }

    return sum - 2 * val;
};

//  Greedy is wrong solution