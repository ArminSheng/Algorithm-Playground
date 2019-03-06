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

var largestRectangleArea1 = function(heights) {
    let h, l, r;
    let max = 0;

    for (let i = 0, len = heights.length; i < len; i++) {
        h = heights[i];
        if (h < 1) continue;

        l = r = i;
        while (l >= 0) {
            l--;
            if (heights[l] < h) break;
        }

        while (r < len) {
            r++;
            if (heights[r] < h) break;
        }

        max = Math.max(max, (r - l - 1) * h);
    }

    return max;
}