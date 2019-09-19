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

            let a, b;
            let lt = 1;
            let rt = j;
            let k;

            while (lt <= rt) {
                k = lt + rt >> 1;
                a = dp[i][j - k];
                b = dp[i - 1][k - 1];

                if (a > b) {
                    lt = k + 1;
                } else if (a < b) {
                    rt = k - 1;
                } else {
                    break;
                }
            }

            dp[i][j] = Math.max(dp[i][j - k], dp[i - 1][k - 1]) + 1;
        }
    }

    return dp[K][N];
};