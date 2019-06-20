/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const hash = {};
    let len = 0;
    for (let c of s1) {
        hash[c] = hash[c] || 0;
        hash[c]++;
        len++;
    }

    function h (s, hash, l, start) {
        if (l > s.length - start) return false;
        const _h = clone(hash);
        if (!hash[s[start]]) {
            return false;
        }

        for (let i = start; i < s.length; i++) {
            if (!_h[s[i]]) {
                return false;
            }
            l--;
            _h[s[i]]--;
            if (l === 0) return true;
        }

        return true;
    }

    for (let i = 0; i < s2.length; i++) {
        if (h(s2, hash, len, i)) return true;
    }

    return false;
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}