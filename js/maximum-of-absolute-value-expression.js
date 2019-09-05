/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
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