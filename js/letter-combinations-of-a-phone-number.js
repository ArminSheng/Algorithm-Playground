/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = [
        [], [], 
        ['a', 'b', 'c'], 
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    const res = [];

    for (let i = 0; i < digits.length; i++) {
        _h(i, '');
    }

    function _h (i, s) {
        for (let j = 0; j < map[digits[i]].length; j++) {
            if (s.length === digits.length) {
                res.push(s);
            } else {
                _h(i + 1, s + map[digits[i]][j]);
            }
        }
    }

    return res;
};
