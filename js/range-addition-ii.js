/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let x = m, y = n;

    for (let [i, j] of ops) {
        x = Math.min(x, i);
        y = Math.min(y, j);
    }

    return x * y;
};