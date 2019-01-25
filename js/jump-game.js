/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end = 0;
    const len = nums.length;

    for (let i = 0; i < len && i <= end; i++) {
        end = Math.max(end, i + nums[i]);
    }

    return end >= len - 1;
};

var canJump2 = function(nums) {
    const L = nums.length;
    if (L < 2) return true;

    let pos, end, idx, max = 0, start = 0, steps = nums[0];

    while (steps > 0) {
        max = pos = start + nums[start];
        idx = start;
        if (pos >= L - 1) return true;
        end = start + steps;

        while (start < end) {
            start++;
            pos = start + nums[start];

            if (isNaN(pos)) return true;
            if (pos >= max) {
                max = pos;
                idx = start;
            }
        }

        start = idx;
        steps = nums[start];
    }

    return false;
};