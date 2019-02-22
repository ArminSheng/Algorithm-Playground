/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p) return !s;

    if (p.length === 1) {
        return s.length === 1 && (p === s || p === '.');
    }

    if (p[1] !== '*') {
        return s &&  (p[0] === s[0] || p[0] === '.') && isMatch(s.substr(1), p.substr(1));
    }

    while ((p[0] === s[0] || p[0] === '.') && s) {
        if (isMatch(s, p.substr(2))) return true;
        s = s.substr(1);
    }

    return isMatch(s, p.substr(2));
};