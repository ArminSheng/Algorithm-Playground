/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let pos, dist, idx, max = 0, cur = 0;
    const L = nums.length;

    while (cur < L) {
        pos = cur + nums[cur];
        if (pos >= L - 1) return true;
        dist = cur + nums[cur];

        while (cur < dist) {
            // console.log(pos, nums[i + k + 1], i + k + 1);
            cur++;
            pos = cur + nums[cur];
            // if (pos >= L - 1) return true;
            if (isNaN(pos)) return true;
            if (pos > max) {
                max = pos;
                idx = cur;
            }
        }

        // console.log(pos)
        cur = idx;
        if (nums[cur] === 0) return false;
    }
};