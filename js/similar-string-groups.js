/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function(A) {
    function quickUnion(s, index) {
        let _s;

        for (let i = index + 1; i < N; i++) {
            _s = A[i];

            if (isSimilar(s, _s)) {
                union(index, i);
            }
        }
    }

    function getVector (i) {
        return i === uf[i] ? i : getVector(uf[i]);
    } 
    
    function union(p, q) {
        let pRoot = getVector(p);
        let qRoot = getVector(q);
    
        if (pRoot === qRoot) return;
        uf[pRoot] = qRoot;
        count--;
    }

    // Reduce the duplicate str
    const map = {};
    for (let str of A) {
        map[str] = 1;
    }
    
    A = Object.keys(map);

    const uf = A.map((_, idx) => idx);
    const N = A.length;
    let count = N;

    for (let i = 0; i < N; i++) {
        let str = A[i];
        quickUnion(str, i);
    }

    return count;
};

function isSimilar(s1, s2) {
    let dis = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) dis++;
        if (dis > 2) return false;
    }

    return dis === 2;
}