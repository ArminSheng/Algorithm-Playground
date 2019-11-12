/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    const len = A.length;

    const dp = Array(len).fill(0).map(_ => Array(len).fill(Infinity));

    for (let i = 0; i < len; ++i) {
        dp[i][(i + 1) % len] = 0; // 两个点构不成三角形，初始化为0
    }

    for (let m = 2; m < len; m++) {
        for (let i = 0; i < len; i++) {
            let j = (i + m) % len;

            for (let k = (i + 1) % len; k !== j; k = (k + 1) % len) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + A[i] * A[k] * A[j] + dp[k][j]);
            }
        }
    }

    return dp[0][len - 1];
};