/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1 === s2) return true;

    // const map = new Set();
    // map.add(s1);
    const map = {[s1]: 0};
    let res = false;

    function helper (left, right) {
        const s = left + right;
console.log('s: ', s)
        if (res || s === s2) {
            res = true;
            return;
        }

        if (map[s]) {
            return;
        }

        // map.add(s);

        let l, r;
        for (let i = 1; i < left.length; i++) {
            l = left.substr(0, i);
            r = left.substr(i);

            map[s] = 1;
            helper(r + l, right);
            map[s] = 0;
        }

        for (let i = 1; i < right.length; i++) {
            l = right.substr(0, i);
            r = right.substr(i);

            map[s] = 1;
            helper(left, r + l);
            map[s] = 0;
        }
    }

    let l, r;
    for (let i = 1; i < s1.length; i++) {
        l = s1.substr(0, i);
        r = s1.substr(i);
        helper(l, r);
    }
    console.log(map)
    return res;
};