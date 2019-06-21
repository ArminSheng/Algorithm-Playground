/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//  Best
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false;
    const hash = {};
    let len = 0;
    for (let c of s1) {
        hash[c] = hash[c] || 0;
        hash[c]++;
        len++;
    }

    let left = 0;
    let right = len;

    for (let i = 0; i < right; i++) {
        if (hash[s2[i]] === undefined) continue;

        if (hash[s2[i]] > 0) {
            hash[s2[i]]--;
            len--;
        } else {
            hash[s2[i]]--;
        }
    }

    if (len === 0) return true;

    while (right < s2.length) {
        if (hash[s2[right]] > 0) {
            hash[s2[right]]--;
            len--;
        } else if (hash[s2[right]] <= 0) {
            hash[s2[right]]--;
        }

        if (hash[s2[left]] !== undefined) {
            hash[s2[left]]++;
            if (hash[s2[left]] > 0) len++;
        }

        left++;
        right++;

        if (len === 0) return true;
    }

    return false;
}

var checkInclusion1 = function(s1, s2) {
    const hash = {};
    let len = 0;
    for (let c of s1) {
        hash[c] = hash[c] || 0;
        hash[c]++;
        len++;
    }

    function h (s, hash, l, start) {
        if (l > s.length - start) return false;
        if (!hash[s[start]]) {
            return false;
        }

        const _h = Object.assign({}, hash);
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