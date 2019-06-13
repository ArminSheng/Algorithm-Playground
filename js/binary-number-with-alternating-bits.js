/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const temp = n ^ (n >> 1);
    return (temp & (temp + 1)) === 0;
}

var hasAlternatingBits1 = function(n) {
    for (let i = -2; i < 0; i++) {
        let num = 0;
        let k = i;

        while (n >= num) {
            if (n === num) return true;
            k += 2;
            num += 2 ** k;
        }
    }

    return false;
};