/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let k = -2;
    let num = 0;

    while (n >= num) {
        if (n === num) return true;
        k += 2;
        num += 2 ** k;
    }

    k = -1;
    num = 0;
    while (n >= num) {
        if (n === num) return true;
        k += 2;
        num += 2 ** k;
    }

    return false;
};