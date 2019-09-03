/**
 * @param {number[][]} grid
 * @return {number}
 * 通过并查集(union find)这种数据结构找出所有的岛屿及其面积
 * grid[i][j] === 0时，找出与该点相连的union面积之和，与最大面积进行比较
 */
var largestIsland = function(grid) {
    const m = grid.length;
    if (!m) return 0;

    let res = 0;
    const areas = [0, 0];

    // 寻找所有的岛屿并记录面积
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                const index = areas.length;
                areas[index] = dfs_union(grid, i, j, index, m);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                let ans = 1;

                for (let w of neighbors(i, j, grid, m)) {
                    ans += areas[w];
                }

                res = Math.max(res, ans);
            }
        }
    }

    return res === 0 ? m * m : res;
};

// 找出与grid[i][j]相邻的union
// @return {Set}
function neighbors (i, j, grid, m) {
    const set = new Set();

    if (i < m - 1 && grid[i + 1][j]) set.add(grid[i + 1][j]);
    if (i > 0 && grid[i - 1][j]) set.add(grid[i - 1][j]);
    if (grid[i][j + 1]) set.add(grid[i][j + 1]);
    if (grid[i][j - 1]) set.add(grid[i][j - 1]);

    return set;
}

// @return {number}
function dfs_union (grid, i, j, n, size) {
    if (i >= size || i < 0 || j >= size || j < 0 || grid[i][j] === 0) return 0;

    let count = 0;

    if (grid[i][j] !== n) {
        grid[i][j] = n;
        count++;

        count += dfs_union(grid, i + 1, j, n, size);
        count += dfs_union(grid, i - 1, j, n, size);
        count += dfs_union(grid, i, j + 1, n, size);
        count += dfs_union(grid, i, j - 1, n, size);
    }

    return count;
}