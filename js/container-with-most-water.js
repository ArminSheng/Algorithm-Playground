/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let x, y;

    for (let i = 0, len = height.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            x = Math.min(height[i], height[j]);
            y = j - i;
            max = Math.max(max, x * y);
        }
    }

    return max;
};

var maxArea2 = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            maxArea = Math.max(maxArea, height[left] * (right - left));
            left++;
        } else {
            maxArea = Math.max(maxArea, height[right] * (right - left));
            right--;
        }
    }

    return maxArea;
};

var maxArea2$ = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let minHeight = height[left] < height[right] ? height[left++] : height[right--];
        maxArea = Math.max(maxArea, minHeight * (right - left + 1));
    }

    return maxArea;
};