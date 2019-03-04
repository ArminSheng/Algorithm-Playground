/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const G = obstacleGrid;
    if  (G[0][0] === 1) return 0;

    const m = G.length;
    const n = G[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (G[i][j] === 1) {
                G[i][j] = 0;
                continue;
            }

            if (i === 0 && j === 0) {
                G[0][0] = 1;
            } else if (i === 0) {
                G[i][j] = G[i][j - 1];
            } else if (j === 0) {
                G[i][j] = G[i - 1][j];
            } else {
                G[i][j] = G[i - 1][j] + G[i][j - 1];
            }
        }
    }

    return G[m - 1][n - 1];
};