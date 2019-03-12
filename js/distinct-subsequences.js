/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    const dp = Array(m + 1).fill(0).map(_ => []);

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j === 0) dp[i][j] = 1;

            else if (i < j) dp[i][j] = 0;

            else if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } 
            
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}



// @Deprecated
// var numDistinct1 = function(s, t) {
//     let res = 0;

//     function backtrack(i, start) {
//         if (i === t.length) res++;
//         else {
//             let c = t[i];
//             for (let j = start + 1; j < s.length; j++) {
//                 if (s[j] === c) backtrack(i + 1, j);
//             }
//         }
//     }

//     backtrack(0, -1);
//     return res;
// };