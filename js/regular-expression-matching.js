/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (p === '.*') return true;
    const l = s.length;
    let res = false;

    function bt(s, p, _p) {
        if (s === p) {
            res = true;
            return;
        };

        for (let i = 0; i < p.length; i++) {
            if (p[i] === '.') {
                bt(s, p.replcae('.', s[i]), _p);
            }

            if (p[i] === '*') {
                bt(s, p.slice(0, i - 1).concat(p.slice(i + 1, p.length)), _p);
                for (let j = 0; j <= l - i; j++) {
                    bt(s, p.replcae('*', copyChar(_p[i - 1], i)), _p);
                }
            }
        }
    }

    return res;
};

function copyChar (char, i, acc = '') {
    return i < 1 ? acc : copyChar(char, i - 1, acc + char);
}