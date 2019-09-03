/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const m = grid.length;
    if (!m) return 0;

    let res = 0;
    let count;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                grid[i][j] = 1;

                const map = Array(m).fill(0).map(_ => []);
                count = 0;

                dfs(grid, i, j, map, m)
                res = Math.max(res, count);

                grid[i][j] = 0;
            }
        }
    }

    function dfs (grid, i, j, map, m) {
        if (i >= m || i < 0 || j >= m || j < 0 || map[i][j]) return count;

        map[i][j] = true;

        if (grid[i][j] === 1) {
            count++;
            dfs(grid, i + 1, j, map, m);
            dfs(grid, i - 1, j, map, m);
            dfs(grid, i, j + 1, map, m);
            dfs(grid, i, j - 1, map, m);
        }
    }

    return res === 0 ? m * m : res;
};
