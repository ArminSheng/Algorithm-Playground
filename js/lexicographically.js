/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 */
var smallestEquivalentString = function(A, B, S) {
    const union = {};

    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        const b = B[i];
        union[a] = union[a] || a;
        union[b] = union[b] || b;

        const ua = find(union, a);
        const ub = find(union, b);

        if (a === b || ua === ub) {
            continue;
        }

        if (ua < ub) {
            union[ub] = ua;
        } else {
            union[ua] = ub;
        }
    }

    let res = '';
    for (let i = 0; i < S.length; i++) {
        res += find(union, S[i]);
    }

    return res;
};

function find (union, key) {
    if (!union[key]) return key;
    if (union[key] === key) return union[key]
    else return find(union, union[key]);
}