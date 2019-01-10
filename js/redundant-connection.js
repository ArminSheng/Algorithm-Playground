/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const UF = [];
    let r1, r2;

    for (let i of edges) {
        r1 = findUnion(i[0]);
        r2 = findUnion(i[1]);

        if (r1 === r2) {
            return i;
        }

        UF[r2] = r1;
    }

    function findUnion (v) {
        if (!UF[v]) UF[v] = v;
        while (UF[v] !== v) {
            v = UF[v];
        }
        return v;
    }
};