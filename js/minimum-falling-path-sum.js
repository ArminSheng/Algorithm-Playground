/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const m = A.length;
    if (!m) return 0;
    const n = A[0].length;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            A[i][j] += Math.min(...A[i - 1].slice(j === 0 ? 0 : j - 1, j + 2));
        }
    }

    return Math.min(...A[m - 1]);
};