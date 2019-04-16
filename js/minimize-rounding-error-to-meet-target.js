/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
    let res = Infinity;

    function backtrack (i, t, sum) {
        if (i === prices.length) {
            if (t === 0) {
                res = Math.min(res, sum);
            }
        } else {
            const ceil = Math.ceil(prices[i]);
            const floor = Math.floor(prices[i]);
            backtrack(i + 1, t - ceil, sum + Math.abs(ceil - prices[i]));
            backtrack(i + 1, t - floor, sum + Math.abs(prices[i] - floor));
        }
    }

    backtrack(0, target, 0);
    return res !== Infinity ? res.toFixed(3) : '-1';
};