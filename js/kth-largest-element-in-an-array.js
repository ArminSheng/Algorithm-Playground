/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max;
    const map = [];
    while(k) {
        max = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (map[i]) continue;
            if (nums[i] > max) {
                max = nums[i];
                pos = i;
            }
        }

        k--;
        map[pos] = true;
    }

    return max;
};

var findKthLargest2 = function(nums, k) {
    nums = nums.sort((a, b) => b - a);
    return nums[k - 1];
};