/**
 * @param {number[]} nums
 * @return {number[]}
 */
var reversePairs = function(nums) {
    const len = nums.length;
    let res = 0;
    const sorted = nums.slice().sort((a, b) => a - b);
    const hash = {};
    const set = Array.from(new Set(sorted));
    const map = Array(set.length).fill(0);
    const searchCache = [];

    for (let i = 0; i < set.length; i++) {
        hash[set[i]] = i;
    }

    for (let i = len - 1; i > - 1; i--) {
        const j = hash[nums[i]];
        res += sum(j);
        map[j]++;
    }

    function sum (k) {
        let res = 0;
        const v = set[k] / 2;
        const lower = binarySearchBound(set, v, k);

        if (set[k] > 2 * set[lower]) {
            res += map[lower];
        }

        for (let i = 0; i < lower; i++) {
            res += map[i];
        }

        return res;
    }

    function binarySearchBound (arr, target, idx) {
        if (searchCache[idx] !== undefined) return searchCache[idx];

        let low = 0;
        let high = arr.length - 1;
        let mid = 0;

        while (low <= high) {
            mid = (low + high) >> 1;
            if (arr[mid] === target) {
                searchCache[idx] = mid;
                return mid;
            }
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }

        searchCache[idx] = mid;
        return mid;
    }

    return res;
};
