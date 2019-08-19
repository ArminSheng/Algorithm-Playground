/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /[^A-Za-z0-9]/g;

    s = s.replace(reg, '').toLocaleLowerCase();

    const len = s.length;
    for (let i = 0; i < len >> 1; i++) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }

    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /[^A-Za-z0-9]/g;
    s = s.replace(reg, '').toLocaleLowerCase();

    return s === s.split('').reverse().join('');
};