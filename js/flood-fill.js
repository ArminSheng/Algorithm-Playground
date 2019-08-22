/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    let m = image.length;
    let n = image[0].length;
    const map = Array(m).fill(0).map(_ => []);

    function dfs (arr, x, y) {
        if (x >= m || y >= n || x < 0 || y < 0 || map[x][y]) return;

        map[x][y] = true;
        if (arr[x][y] === oldColor) {
            arr[x][y] = newColor;

            dfs(arr, x + 1, y);
            dfs(arr, x - 1, y);
            dfs(arr, x, y + 1);
            dfs(arr, x, y - 1);
        }
    }

    dfs(image, sr, sc);

    return image;
};