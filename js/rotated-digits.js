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

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let r1 = /[3|4|7]/;
    let r2 = /[2|5|6|9]/;
    let s = 0;
    for(let i=0; i<=N; i++) {
      if (!r1.test(i) && r2.test(i)) {
        s++;
      }
    }
    return s;
  };