/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (!matrix || !matrix.length) return;
    const m = matrix.length + 1;
    const n = matrix[0].length + 1;
    const dp = Array(m).fill(0).map(_ => Array(n).fill(0));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }

    this.dp = dp;
    this.m = m - 1;
    this.n = n - 1;
};

/**
 * @param {number} r1
 * @param {number} c1
 * @param {number} r2
 * @param {number} c2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(r1, c1, r2, c2) {
    const dp = this.dp;
    r2 += 1;
    c2 += 1;
    return dp[r2][c2] - dp[r2][c1] - dp[r1][c2] + dp[r1][c1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(r1,c1,r2,c2)
 */