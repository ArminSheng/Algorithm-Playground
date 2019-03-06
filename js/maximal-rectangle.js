/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || !matrix[0]) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const heights = [];

    for (let i = 0; i < m; i++) {
        let h = 0;
        heights[i] = 0;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                h = 0;
            } else {
                h++;
            }
            heights[i] = Math.max(heights[i], h);
        }
    }

    return largestRectangleArea(heights);
}

var maximalRectangle1 = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(m).fill(0).map(_ => []);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
};

/**
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