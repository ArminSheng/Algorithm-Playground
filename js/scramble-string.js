/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if(s1 === s2) return true;

    if (!isSame(s1, s2)) return false;
    
    const l = s1.length;
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