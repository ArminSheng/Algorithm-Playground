/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) return false;
    if (!m) return s2 === s3;
    if (!n) return s1 === s3;

    const dp = Array(m + 1).fill(0).map(_ => []);

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                dp[0][0] = true;
            }

            else if (i === 0) {
                dp[0][j] = dp[0][j - 1] && s3[j - 1] === s2[j - 1];
            }

            else if (j === 0) {
                dp[i][0] = dp[i - 1][0] && s3[i - 1] === s1[i - 1];
            }

            else if (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) {
                dp[i][j] = true;
            }

            else if (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]) {
                dp[i][j] = true;
            }
        }
    }

    return !!dp[m][n];
};