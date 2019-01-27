/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length;

    let res = 1;
    let lastIsPositive = null;
    let isPositive;
    let last = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === last) continue;
        isPositive = nums[i] - last > 0;

        if (isPositive !== lastIsPositive) {
            res++;
            lastIsPositive = isPositive;
        }
        
        last = nums[i];
    }

    return res;
};
