/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

//  Time over
var superEggDrop = function(K, N) {
    const dp = Array(K + 1).fill(0).map(_ => Array(N + 1).fill(0));

    for (let i = 1; i <= K; i++) {
        for (let j = 1; j <= N; j++) {
            if (i === 1) {
                dp[i][j] = j;
                continue;
            }

            if (j === 1) {
                dp[i][j] = 1;
                continue;
            }

            const s = new Set();
            for (let k = j; k > 0; k--) {
                s.add(Math.max(dp[i][j - k], dp[i - 1][k - 1]));
            }

            dp[i][j] = Math.min(...s) + 1;
        }
    }

    return dp[K][N];
};