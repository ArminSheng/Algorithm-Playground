/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const len = nums.length + 2;
    const meme = Array(len + 2).fill(0).map(_ => []);

    nums.unshift(1);
    nums.push(1);

    function helper (l, r) {
        if (l + 1 === r) return 0;
        if (meme[l][r]) return meme[l][r];

        let res = 0;
        for (let i = l + 1; i < r; i++) {
            res = Math.max(res, nums[l] * nums[i] * nums[r] + helper(l, i) + helper(i, r));
        }

        meme[l][r] = res;
        return res;
    }

    return helper(0, len - 1);
};