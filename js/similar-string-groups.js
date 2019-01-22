/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function(A) {
    function getUF(s, index) {
        let _s;

        for (let i = index + 1; i < N; i++) {
            _s = A[i];

            if (isSimilar(s, _s)) {
                union(index, i);
            }
        }
    }

    function find(i) {
        return i === uf[i] ? i : find(uf[i]);
    } 
    
    function union(p, q) {
        let pRoot = find(p);
        let qRoot = find(q);
    
        if (pRoot === qRoot) return;
        uf[pRoot] = qRoot;
        count--;
    }

    // Reduce the duplicate str
    A = Array.from(new Set(A));
    
    const uf = A.map((_, idx) => idx);
    const N = A.length;
    let count = N;

    for (let i = 0; i < N; i++) {
        getUF(A[i], i);
    }

    return count;
};

function isSimilar(s1, s2) {
    let dis = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) dis++;
        if (dis > 2) return false;
    }

    return true;
}