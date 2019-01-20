/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
    if (A === B) return 0;

    const L = A.length;
    const queue = [A];
    const map = {[A]: 0};

    let s = A;
    let target;
    
    while (s) {
        s = queue.shift();
        let count = map[s];

        if (s === B) {
            return count;
        };

        let start;
        
        for (let k = 0; k < L; k++) {
            if (s[k] !== B[k]) {
                start = k;
                break;
            }
        }
        
        target = B[start];
        for (let j = start + 1; j < L; j++) {
            if (s[j] === target) {
                let swaped = swap(start, j, s);
                if (map[swaped]) continue;

                map[swaped] = count + 1;
                queue.push(swaped);
            }
        }
    }
};

function swap(i, j, str) {
    let s = str.split('');
    [s[i], s[j]] = [s[j], s[i]];
    return s.join('');
}
