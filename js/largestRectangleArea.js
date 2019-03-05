/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
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