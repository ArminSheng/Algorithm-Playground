/**
 * @param {number[]} nums
 * @return {number[]}
 */
var reversePairs = function(nums) {
    const len = nums.length;
    let res = 0;
    const sorted = nums.slice().sort((a, b) => a - b);
    const hash = {};
    const map = Array(len).fill(0);
    const dict = [];

    for (let i = 0; i < len; i++) {
        hash[sorted[i]] = i;
        dict[i] = sorted[i];
    }

    for (let i = len - 1; i > - 1; i--) {
        const j = hash[nums[i]];
        res += sum(j);
        map[j]++;
    }

    function sum (k) {
        let res = 0;
        const v = dict[k];

        for (let i = 0; i <= k; i++) {
            const key = dict[i];

            if (v > (2 * key)) {
                res += map[i];
            }
        }

        return res;
    }

    return res;
};

