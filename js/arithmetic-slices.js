/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    const dp = [0, 0];

    let gap1 = A[1] - A[0];
    let gap2;

    for (let i = 2; i < A.length; i++) {
        gap2 = A[i] - A[i - 1];

        if (gap1 === gap2) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 0;
            gap1 = gap2;
        }
    }

    return dp.reduce((cur, acc) => acc + cur, 0);
}

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