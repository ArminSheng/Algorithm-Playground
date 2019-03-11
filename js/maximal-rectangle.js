/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || !matrix[0]) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const heights = Array(n).fill(0);
    let res = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                heights[j] = 0;
            } else {
                heights[j]++;
            }
        }
        res = Math.max(res, largestRectangleArea(heights));
    }

    return res;
}

/**
 * @Dependency
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    const stack = [];
    let max = 0;
    heights.push(0);

    for (let i = 0; i < heights.length;) {
        if (!stack.length || heights[stack[stack.length - 1]] < heights[i]) {
            stack.push(i++);
        } else {
            let pop = stack.pop();
            max = Math.max(max, heights[pop] * (stack.length ? i - stack[stack.length - 1] - 1 : i));
        }
    }

    return max;
}