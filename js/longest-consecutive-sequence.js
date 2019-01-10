/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    const set = {};

    for (let i of nums) {
        set[i] = true;
    }

    for (let i of nums) {
        if (set[i + 1]) continue;
        max = Math.max(max, helper(i, 0));
    }

    function helper (i, count) {
        if (!set[i]) return count;
        count++;
        return helper(i - 1, count);
    }

    return max;
};

// Non recursive
var longestConsecutive2 = function(nums) {
    let max = 0;
    const set = {};

    for (let i of nums) {
        set[i] = true;
    }

    for (let i of nums) {
        if (set[i + 1]) continue;

        let count = 1;
        while (set[i--]) {
            count++;
        }

        max = Math.max(max, count);
    }

    return max;
};