/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!t) return '';
    const hash = {};
    let lt = 0;
    let rt;
    let count = t.length;
    let len;

    let left, right;

    for (let char of t) {
        hash[char] = hash[char] || 0;
        hash[char]++;
    }

    for (let i = 0; i < s.length; i++) {
        const tmp = hash[s[i]];
        if (tmp !== undefined) {
            hash[s[i]]--;
            if (hash[s[i]] >= 0) {
                count--;
            }
        }

        if (count === 0) {
            rt = i;
            len = rt - lt;
            left = lt;
            right = rt;
            break;
        }
    }

    if (count > 0) return '';

    while (rt <= s.length) {
        if (hash[s[lt]] === undefined || hash[s[lt]] < 0) {
            if (hash[s[lt]] !== undefined) {
                hash[s[lt]]++;
            }

            lt++;

            if ((rt - lt) < len) {
                len = rt - lt;
                left = lt;
                right = rt;
            }
        } else {
            rt++;
            if (hash[s[rt]] !== undefined) {
                hash[s[rt]]--;
            }
        }
    }

    return s.slice(left, right + 1);
};