/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j, dp = Array(m).fill(0).map(_ => Array(n).fill(0).map(_ => Array(N + 1).fill(-1)))) {
    if (N < 0) return 0;
    if (i < 0 || j < 0 || i >= m || j >= n) return 1;

    if (dp[i][j][N] === -1) {
        dp[i][j][N] = 0;
        dp[i][j][N] += findPaths(m, n, N - 1, i - 1, j, dp)
            + findPaths(m, n, N - 1, i + 1, j, dp)
            + findPaths(m, n, N - 1, i, j - 1, dp)
            + findPaths(m, n, N - 1, i, j + 1, dp);
    }

    return dp[i][j][N] % (10 ** 9 + 7);
}


// time over
var findPaths = function(m, n, N, i, j) {
    let res = 0;

    function dfs (x, y, move) {
        if (move > N) return;
        if (x < 0 || y < 0 || x >= m || y >= n) res++;

        if (x >= 0 && x < m && y >= 0 && y < n) {
            dfs(x + 1, y, move + 1);
            dfs(x - 1, y, move + 1);
            dfs(x, y + 1, move + 1);
            dfs(x, y - 1, move + 1);
        }
    }

    dfs(i, j, 0);

    return res;
};