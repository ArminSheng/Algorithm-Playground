/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
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

// Timeover
var longestIncreasingPath2 = function(matrix) {
    const len = matrix.length;
    if (!len) return 0;

    const wid = matrix[0].length;
    let ans = 1;
    const marked = Array(len).fill(0).map(_ => Array(wid).fill(0));

    function dfs(i, j, m, marked, last, max) {
        if (marked[i][j]) return marked[i][j];
        if (marked[i][j] || i < 0 || i >= len || j < 0 || j >= wid) return 0;

        // const cur = m[i][j];
        const cur = marked[i][j];

        let _max = 1 + Math.max(
            dfs(i + 1, j, m, marked, cur, max + 1),
            dfs(i - 1, j, m, marked, cur, max + 1),
            dfs(i, j + 1, m, marked, cur, max + 1),
            dfs(i, j - 1, m, marked, cur, max + 1)
        );

        // if (cur > last) {
        //     if (max > maxLen) {
        //         maxLen = max;
        //     }
        // }
        marked[i][j] = _max;
        return _max;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < wid; j++) {
            dfs(i, j, matrix, [], -Infinity, 1);
        }
    }

    return maxLen;
};