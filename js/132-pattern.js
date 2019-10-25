/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  Best solution O(n);
var find132pattern = function(nums) {
    const len = nums.length;
    let second = -Infinity;
    const stack = [nums[len - 1]];

    for (let i = len - 2; i > -1; i--) {
        if (nums[i] < second) {
            return true;
        } else {
            while (stack.length && nums[i] > stack[stack.length - 1]) {
                second = Math.max(second, stack.pop());
            }

            stack.push(nums[i]);
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  O(n2)
var find132pattern = function(nums) {
    const len = nums.length;
    let stack;

    for (let i = 0; i < len; i++) {
        stack = [nums[i]];
        for (let j = i + 1; j < len; j++) {
            if (stack[1] === undefined) {
                nums[j] > stack[0] ? stack[1] = nums[j] : stack[0] = nums[j];
            } else {
                if (nums[j] > stack[1]) stack[1] = nums[j];
                if (nums[j] < stack[1] && nums[j] > stack[0]) return true;
            }
        }
    }

    return false;
};