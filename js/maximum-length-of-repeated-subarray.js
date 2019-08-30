/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const m = A.length + 1;
    const n = B.length + 1;
    const dp = Array(m).fill(0).map(_ => Array(n).fill(0));
    let res = 0;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }

    return res;
}

// Error solution
// Heap out of memory
var findLength = function(A, B) {
    const m = A.length;
    const n = B.length;
    const map = {};
    let res = 0;

    for (let i = 0; i < m; i++) {
        let str = '';
        for (let j = i; j < m; j++) {
            str += A[j] + ',';
            map[str] = 1;
        }
    }

    for (let i = 0; i < n; i++) {
        let str = '';
        let count = 0;
        for (let j = i; j < n; j++) {
            str += B[j] + ',';
            count++;

            if (map[str]) {
                res = Math.max(res, count);
            }
        }
    }

    return res;
};