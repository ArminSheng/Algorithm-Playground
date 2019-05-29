/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const len = grid.length;
    if (!len) return 0;

    const wid = grid[0].length;
    const visited = [];
    let count = 0;

    for (let i = 0; i < len; i++) {
        visited[i] = [];
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < wid; j++) {
            if (visited[i][j]) continue;
            if (grid[i][j] == 1) {
                count++;
                dfs(i, j);
            }
        }
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= len || j >= wid || grid[i][j] == 0 || visited[i][j]) return;

        visited[i][j] = true;

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    return count;
};