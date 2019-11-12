/**
 * @param {number} n
 * @return {number}
 */

//  Best solution
var countVowelPermutation = function(n) {
    let dp = Array(5).fill(1);
    const mod = 10 ** 9 + 7;
    const vowelsBefore = [
        [1, 2, 4],
        [0, 2],
        [1, 3],
        [2],
        [2, 3]
    ];

    for (let i = 1; i < n; i++) {
        const next = Array(5).fill(0);

        for (let j = 0; j < 5; j++) {
            for (let v of vowelsBefore[j]) {
                next[j] += dp[v] % mod;
            }
        }

        dp = next;
    }

    return dp.reduce((acc, cur) => acc + cur, 0) % mod;
}

var countVowelPermutation = function(n) {
    const vowelsBefore = [
        [1, 2, 4],
        [0, 2],
        [1, 3],
        [2],
        [2, 3]
    ];

    const dp = Array(n).fill(0).map(_ => Array(5).fill(0));
    let res = 0;
    const mod = 10 ** 9 + 7;

    for (let i = 0; i < 5; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 5; j++) {
            for (let v of vowelsBefore[j]) {
                dp[i][j] += dp[i - 1][v] % mod;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        res += dp[n - 1][i];
    }

    return res % mod;
};