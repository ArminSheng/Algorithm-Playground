/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const map = {};
    for (let s of strs) {
        if (map[s]) continue;

        map[s] = [0, 0];
        for (let c of s) {
            map[s][c]++;
        }
    }

    const s1 = strs.sort((a, b) => {
        if (a.length === b.length) return map[a][0] - map[b][0];

        return a.length - b.length;
    });

    const v1 = h(s1, m, n);
    const v2 = h(s1.sort((a, b) => {
            if (a.length === b.length) return map[a][1] - map[b][1];

            return a.length - b.length;
        }), m, n);

    const v3 = h(s1.sort((a, b) => map[a][0] - map[b][0]), m, n);
    const v4 = h(s1.sort((a, b) => map[a][1] - map[b][1]), m, n);

    return Math.max(v1, v2, v3, v4);
};

function h(strs, m, n) {
    const len = strs.length;
    let res = 0;
    let s;
    const remains = [m, n];

    for (let i = 0; i < len; i++) {
        s = strs[i];
        const amount = [0, 0];
        let shouldContinue = false;

        for (let j of s) {
            amount[j]++;
            if (amount[j] > remains[j]) {
                shouldContinue = true;
                break;
            }
        }

        if (shouldContinue) continue;

        remains[0] -= amount[0];
        remains[1] -= amount[1];

        res++;
    }

    return res;
}
