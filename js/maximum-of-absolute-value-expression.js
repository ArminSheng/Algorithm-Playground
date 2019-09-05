/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    const len = arr1.length;
    const a = [], b = [], c = [], d = [];
    const max = Math.max;
    const min = Math.min;

    for (let i = 0; i < len; i++) {
        a.push(arr1[i] + arr2[i] + i);
        b.push(arr1[i] - arr2[i] + i);
        c.push(arr1[i] - arr2[i] - i);
        d.push(arr1[i] + arr2[i] - i);
    }

    const maxA = max(...a) - min(...a);
    const maxB = max(...b) - min(...b);
    const maxC = max(...c) - min(...c);
    const maxD = max(...d) - min(...d);

    return max(maxA, maxB, maxC, maxD);
}

var maxAbsValExpr = function(arr1, arr2) {
    const len = arr1.length;
    let ans = 0;
    let sum;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            sum = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + j - i;
            ans = Math.max(ans, sum);
        }
    }

    return ans;
};