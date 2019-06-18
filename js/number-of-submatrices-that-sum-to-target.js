/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const len = matrix.length + 1;
    const wid = matrix[0].length + 1;
    const dp = Array(len).fill(0).map(_ => Array(wid).fill(0));
    let res = 0;

    for (let i = 1; i < len; i++) {
        for (let j = 1; j < wid; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }

    for (let i = 1; i < len; i++) {
        for (let j = 1; j < wid; j++) {
            for (let m = 1; m <= i; m++) {
                for (let n = 1; n <= j; n++) {
                    if (dp[i][j] - dp[m - 1][j] - dp[i][n - 1] + dp[m - 1][n - 1] === target) {
                        res++;
                    }
                }
            }
        }
    }

    return res;
};