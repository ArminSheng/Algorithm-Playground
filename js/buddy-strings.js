/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    const len = A.length;
    if (A.length !== B.length) return false;
    if (A === B) {
        const map = {};
        for (let i = 0; i < len; i++) {
            if (map[A[i]]) return true;
            map[A[i]] = true;
        }
    }

    let count = 0;
    let i0 = -1;
    let i1;

    for (let i = 0; i < len; i++) {
        if (A[i] !== B[i]) {
            count++;
            if (i0 === -1) i0 = i;
            else i1 = i;
        }
    }

    if (count !== 2) return false;
    if (A[i0] === B[i1] && A[i1] === B[i0]) return true;
    else return false;
};