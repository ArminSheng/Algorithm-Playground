/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if (s.length < 2) return 0;

    let res = 0;
    const map = [];

    for (let i = 1; i < s.length; i++) {
        for (let p of map) {
            if (isPalindrome(s.substring(p, i + 1))) {
                map.push(i);
                res--;
                break;
            }
        }
    }

    return res;
};

function isPalindrome(str) {
    if (!str) return false;
    return str === str.split('').reverse().join('');
}