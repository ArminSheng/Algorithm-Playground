/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let [res, len] = [0, grumpy.length];

    for (let i = 0 ; i < len; i++) {
        if (i < X || grumpy[i] === 0) {
            res += customers[i];
        }
    }

    let ans = res;
    for (let i = X; i < len; i++) {
        res -= customers[i - X] * grumpy[i - X];
        res += customers[i] * grumpy[i];

        if (res > ans) {
            ans = res;
        }
    }

    return ans;
};