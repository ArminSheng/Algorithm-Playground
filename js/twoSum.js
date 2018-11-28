/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;
    nums = nums.map((val, index) => {
        return {val, index}
    });

    nums.sort((a, b) => a.val - b.val);

    while(left < right) {
        let leftVal = nums[left].val;
        let rightVal = nums[right].val;
        if (leftVal + rightVal > target) {
            right--;
        } else if (leftVal + rightVal < target) {
            left++;
        } else {
            return [nums[left].index, nums[right].index];
        }
    }

    return false;
};

// Second answer
var twoSum1 = function(nums, target) {
    const map = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        let complement = target - nums[i];
        if (map[complement]) return [map[complement].index, i];
        map[nums[i]] = {index: i};
    }
};