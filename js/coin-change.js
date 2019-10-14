/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount <= 0) return 0;

    const n = coins.length;
    const m = amount + 1;
    const dp = Array(m).fill(0).map(_ => Array(n).fill(Infinity));
    let res = Infinity;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let c = coins[j];
            if (i % c === 0) {
                dp[i][j] = i / c;

            }

            dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] || Infinity, (i >= c ? dp[i - c][n - 1] : Infinity) + 1);

            if (i === amount) {
                res = Math.min(res, dp[i][j]);
            }
        }
    }

    return res === Infinity ? -1 : res;
};