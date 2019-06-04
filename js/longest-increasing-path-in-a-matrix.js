/**
 * @param {number[][]} matrix
 * @return {number}
 */

//  TODO
var longestIncreasingPath1 = function(matrix) {
    const len = matrix.length;
    if (!len) return 0;

    const dp = Array(len).fill(0).map(_ => []);

    // for ()

    for (let i = 1; i < len; i++) {
        for (let j = 1; j < wid; j++) {
            let len1 = 0, len2 = 0;
            if (matrix[i][j] > matrix[i][j - 1]) {
                len1 = dp[i][j - 1]
            }

            if (matrix[i][j] > matrix[i - 1][j]) {
                len2 = dp[i - 1][j];
            }

            dp[i][j] = Math.max(len1, len2) + 1;
            res = Math.max(res, dp[i][j]);
        }
    }
}

var longestIncreasingPath = function(matrix) {
    const len = matrix.length;
    if (!len) return 0;

    const wid = matrix[0].length;
    let ans = 1;
    const marked = Array(len).fill(0).map(_ => Array(wid).fill(0));

    function dfs(i, j, marked) {
        if (marked[i][j]) return marked[i][j];
        if (marked[i][j] || i < 0 || i >= len || j < 0 || j >= wid) return 0;

        const cur = matrix[i][j];
        const row = [1, -1, 0, 0];
        const col = [0, 0, 1, -1];
        let _max = 1;

        for (let k = 0; k < 4; k++) {
            const _i = i + row[k];
            const _j = j + col[k];
            if (matrix[_i] && matrix[_i][_j] !== undefined && cur < matrix[_i][_j]) {
                _max = Math.max(_max, 1 + dfs(_i, _j, marked));
            }
        }

        marked[i][j] = _max;
        return _max;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < wid; j++) {
            ans = Math.max(ans, dfs(i, j, marked));
        }
    }

    return ans;
};