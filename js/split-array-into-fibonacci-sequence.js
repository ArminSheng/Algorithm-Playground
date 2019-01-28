/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    const L = S.length;
    let res;
    const max32Int = 0x7fffffff;

    function helper (s, path) {
        if (!s) {
            return path.reverse();
        }

        let sum = path[0] + path[1];
        if (sum > max32Int) return;

        if (s.search(sum) === 0) {
            let end = -1;
            for (let i = 0; i < s.length; i++) {
                if (sum == s.slice(0, i + 1)) {
                    end = i + 1;
                    break;
                }
            }
            return helper(s.slice(end), [sum, ...path]);
        }
    }

    for (let i = 0; i < L - 2; i++) {
        for (let j = i + 1; j < L - 1; j++) {
            res = helper(S.slice(j + 1), [Number(S.slice(i + 1, j + 1)), Number(S.slice(0, i + 1))]);

            if (res) return res;

            if (S[i + 1] == 0) break;
        }
        if (S[0] == 0) break;
    }

    return [];
};