/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    // if (!isSame(s1, s2)) return false;
    if(s1==s2) return true;

    const l = s1.length;
    const count = Array(26).fill(0);

    for(let i = 0; i < l; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }

    for(let i = 0; i < 26; i++) {
        if (count[i] != 0) return false;
    }

    for (let i = 1; i < l; i++) {
        if (( isScramble(s1.substr(0, i), s2.substr(0, i))
            && isScramble(s1.substr(i), s2.substr(i)) )
            || ( isScramble(s1.substr(0, i), s2.substr(l - i))
            && isScramble(s1.substr(i), s2.substr(0, l - i))) ) {
                return true;
            }
    }

    return false;
};

const isSame = (s1, s2) => {
    if (s1 === s2) return true;
    return [...s1].sort().join('') === [...s2].sort().join('');
}