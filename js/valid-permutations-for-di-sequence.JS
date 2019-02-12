/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function(S) {
    let res = 0;
    const L = S.length;
    if (!L) return 1;
    const map = Array(L + 1).fill(false);

    function helper (map, i, last) {
        if (i === L) {
            res++;
            return;
        }

        for (let j = 0; j <= L; j++) {
            if (map[j]) continue;
            if ((S[i] === 'D' && j < last) || (S[i] === 'I' && j > last)) {
                map[j] = true;
                helper(map, i + 1, j);
                map[j] = false;
            }
        }
    }

    if (S[0] === 'D') {
        for (let i = 1; i <= L; i++) {
            map[i] = true;
            helper(map, 0, i);
            map[i] = false;
        }
    } else {
        for (let i = 0; i < L; i++) {
            map[i] = true;
            helper(map, 0, i);
            map[i] = false;
        }
    }

    return res % 1000000007;
};