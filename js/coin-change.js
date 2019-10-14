/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    if (amount <= 0) return 0;

    const n = coins.length;
    const m = amount + 1;
    const dp = Array(m).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let c = coins[j];

            dp[i] = Math.min(dp[i], (i >= c ? dp[i - c] : Infinity) + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};