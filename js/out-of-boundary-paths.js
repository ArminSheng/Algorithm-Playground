/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

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