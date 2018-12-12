/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    function bt(nums, pos, n) {
        if (pos > n) {
            sum++;
        } else {
            for (let i = pos; i <= n; i++) {
                [nums[i], nums[pos]] = [nums[pos], nums[i]];
                if (nums[pos] % pos === 0 || pos % nums[pos] === 0) {
                    bt(nums, pos + 1, n);
                }
                [nums[i], nums[pos]] = [nums[pos], nums[i]];
            }
        }
    }
    
    let sum = 0;
    const nums = Array(N + 1).fill(0).map((_, i) => i); 

    bt(nums, 1, N);
    return sum;
};