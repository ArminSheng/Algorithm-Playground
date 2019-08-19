/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    let str = '';
    let k = K;
    let lastC;
    let len = 0;

    for (let s of S) {
        if (isNaN(s)) {
            len++;
            K--;
            lastC = s;
        } else {
            len *= s;
            k = K - len;
        }

        if (k === 0) return lastC;
        if (k < 0) {
            if (str.length === 1) return str;
            return decodeAtIndex(str, K % (len / s));
        }

        str += s;
    }

    return '';
};