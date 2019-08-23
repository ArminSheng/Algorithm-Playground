/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];

    // If newColor equals original color,
    // means the image do not need update.
    if (oldColor === newColor) return image;

    let m = image.length;
    let n = image[0].length;

    function dfs (arr, x, y) {
        if (x >= m || y >= n || x < 0 || y < 0 || arr[x][y] !== oldColor) return;

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