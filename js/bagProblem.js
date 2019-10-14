function bagProblem (arr, c) {
    const k = arr.length;
    const dp = Array(k + 1).fill(0).map(_ => Array(c + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= c; j++) {
            if (arr[i - 1][0] > j) dp[i][j] = dp[i - 1][j];
            else {
                const v1 = dp[i - 1][j];
                const v2 = dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1];
                dp[i][j] = Math.max(v1, v2);
            }

            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
}