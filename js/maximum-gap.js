/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums = []) {
    if (nums.length < 2) return 0;

    let bucket = [];
    let ans = 0;

    for (let i of nums) {
        bucket[i] = i;
    }

    bucket = Object.values(bucket);

    for (let i = 1; i < bucket.length; i++) {
        ans = Math.max(ans, bucket[i] - bucket[i - 1])
    }

    return ans;
}

var maximumGap = function(nums = []) {
    if (nums.length < 2) return 0;

    let ans = 0;

    nums.sort((a, b) => {
        return a - b;
    });

    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(ans, nums[i] - nums[i - 1])
    }

    return ans;
};