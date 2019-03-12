/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    const dp = Array(m).fill(0).map(_ => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i] === t[j]) {

            }
        }
    }
}



// @Deprecated
var numDistinct1 = function(s, t) {
    let res = 0;

    function backtrack(i, start) {
        if (i === t.length) res++;
        else {
            let c = t[i];
            for (let j = start + 1; j < s.length; j++) {
                if (s[j] === c) backtrack(i + 1, j);
            }
        }
    }

    backtrack(0, -1);
    return res;
};