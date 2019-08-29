/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k === 1) return s;

    let res = '';
    for (let i = 0; i < s.length;) {
        res += s.substr(i, k).split('').reverse().join('');
        i += k;

        res += s.substr(i, k);
        i += k;
    }

    return res;
};