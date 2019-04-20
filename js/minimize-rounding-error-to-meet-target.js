/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
    let floorSum = 0;
    let ceilSum = 0;
    const errs = [];
    const res = [];

    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        const floor = Math.floor(p);
        const ceil = Math.ceil(p);

        floorSum += floor;
        ceilSum += ceil;

        res.push(p - floor);
        errs.push({i, val: p - floor});
    }

    let remain = target - floorSum;

    if (remain < 0 || (target - ceilSum) > 0) return '-1';

    while (remain > 0) {
        const {i} = popMax(errs);
        res[i] = Math.ceil(prices[i]) - prices[i];
        remain -= 1;
    }

    return res.reduce((prev, cur) => prev + cur, 0).toFixed(3);
};

function popMax (arr) {
    let max = -Infinity;
    let res;

    for (let i of arr) {
        if (i.val > max) {
            res = i;
            max = i.val;
        }
    }
    const deleteIdx = arr.indexOf(res);
    deleteIdx > -1 && arr.splice(deleteIdx, 1);

    return res;
}