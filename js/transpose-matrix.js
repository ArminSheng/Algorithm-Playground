/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    if (!A.length) return A;

    const l = A.length;
    const w = A[0].length;
    const res = Array(w).fill(0).map(_ => []);

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < w; j++) {
            res[j][i] = A[i][j];
        }
    }

    return res;
};