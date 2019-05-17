/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const len = nums.length;
    if (!len) return 0;

    const sum = [];
    let res = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] >= lower && nums[i] <= upper) {
            res++;
        }

        if (i === 0) {
            sum[i] = nums[i];
        } else {
            sum[i] = sum[i - 1] + nums[i];

            if (sum[i] >= lower && sum[i] <= upper) {
                res++;
            }
        }
    }

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i - 1; j++) {
            const s = sum[i] - sum[j];
            if (s >= lower && s <= upper) {
                res++;
            }
        }
    }

    return res;
};