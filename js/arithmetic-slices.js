/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    const l = A.length;
    if (l < 3) return 0;

    const dp = Array(l + 1).fill(0).map(_ => Array(l + 1).fill(0));
    let res = 0;

    for (let i = 1; i <= l; i++) {
        for (let j = i + 2; j <= l; j++) {
            const isRightSlice = A[j - 1] - A[j - 2] === A[j - 2] - A[j - 3];

            if (dp[i - 1][j] || (dp[i][j - 1] || j - i === 2) && isRightSlice) {
                dp[i][j] = 1;
                res++;
            }
        }
    }

    return res;
};