/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            ans.push(nums[i]);
            i--;
        }
    }

    return ans;
};