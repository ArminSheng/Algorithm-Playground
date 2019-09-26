/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length;

    if (!m) return 0;

    const n = triangle[0].length;

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const v = triangle[i][j];

            if (j >= i) {
                triangle[i][j] = v + triangle[i - 1][j - 1];
            } else if (j === 0) {
                triangle[i][j] = v + triangle[i - 1][j];
            } else {
                triangle[i][j] = Math.min(v + triangle[i - 1][j], v + triangle[i - 1][j - 1]);
            }
        }
    }

    return Math.min(...triangle[m - 1]);
};