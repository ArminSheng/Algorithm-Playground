/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K, lastC) {
    let str = '';
    let k = K;
    let len = 0;

    if (K === 0) {
        return lastC;
    };
    
    for (let s of S) {
        if (isNaN(s)) {
            len++;
            k--;
            lastC = s;
        } else {
            len *= s;
            k = K - len;
        }

        if (k === 0) {
            return lastC;
        }

        if (k <= 0) {
            return decodeAtIndex(str, K % (len / s), lastC);
        }

        str += s;
    }

    return '';
};