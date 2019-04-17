/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
    let res = 0;
    const n = prices.length;

    for (let p of prices) {
        if (Number(p).toFixed() === p) {
            target -= p;
        }
    }
    const dp = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + Math.floor(prices[i]), dp[i - 1][j - 1] + Math.round(prices[i]));
        }
    }

    return res;
};