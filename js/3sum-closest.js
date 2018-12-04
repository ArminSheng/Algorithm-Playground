/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum < target) {
                if (Math.abs(target - sum) <= Math.abs(target - closest)) {
                    closest = sum;
                }
                j++;
            } else {
                if (Math.abs(target - sum) <= Math.abs(target - closest)) {
                    closest = sum;
                }
                k--;
            }
        }
    }

    return closest;
};