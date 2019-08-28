/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let res = 0;

    for (let i = 0; i <= N; i++) {
        if (isGoodNum(i)) res++;
    }

    return res;
};

const isValid = {
    0: 0,
    1: 1,
    2: 5,
    5: 2,
    6: 9,
    8: 8,
    9: 6,
};

/**
 * @param {string} n
 * @return {boolean}
 */
function isGoodNum (n) {
    n = n + '';
    let rotated = '';

    for (let i of n) {
        if (isValid[i] === undefined) return false;
        rotated += isValid[i];
    }

    return rotated !== n;
}