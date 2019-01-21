/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function(A) {
    function getUF(s, index) {
        let _s, idx = -1;

        for (let i = 0; i < L; i++) {
            for (let j = i + 1; j < L; j++) {
                // if (s[i] === s[j] || s[j] === s[j - 1] || (s[i - 1] && s[i - 1] === s[i])) continue;
                if (s[i] === s[j]) continue;
                
                _s = swap(i, j, s);
                idx = map[_s];

                if (idx > -1) {
                    union(index, idx);
                }
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

    const uf = A.map((_, idx) => idx);
    const N = A.length;
    const L = A[0].length;
    const map = {};
    let count = N;

    for (let i = 0; i < N; i++) {
        map[A[i]] = i;
    }

    for (let i = 0; i < N; i++) {
        let str = A[i];
        getUF(str, i);
    }

    return count;
};

function swap(i, j, str) {
    let s = str.split('');
    [s[i], s[j]] = [s[j], s[i]];
    return s.join('');
}