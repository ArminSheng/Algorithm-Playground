/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function(S) {
    const mod = 1e9 + 7;
    const n = S.length;

    // Init dp
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = Array(n + 1).fill(0);
    }

    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            if (S[i - 1] === 'D') {
                for (let k = j; k < i; k++) {
                    dp[i][j] += (dp[i - 1][k] % mod);
                }
            } else {
                for (let k = 0; k < j; k++) {
                    dp[i][j] += (dp[i - 1][k] % mod);
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i <= n; i++) {
        res += (dp[n][i] % mod);
    }

    return res % mod;
}

var numPermsDISequence = function(S) {
    let res = 0;
    const L = S.length;
    // if (!L) return 1;
    const map = Array(L + 1).fill(false);

    function helper (map, i, last) {
        if (i === L) {
            res++;
            return;
        }

        if (S[i] === 'D') {
            for (let j = 0; j < last; j++) {
                if (map[j]) continue;
                map[j] = true;
                helper(map, i + 1, j);
                map[j] = false;
            }
        } else {
            for (let j = last + 1; j <= L; j++) {
                if (map[j]) continue;
                map[j] = true;
                helper(map, i + 1, j);
                map[j] = false;
            }
        }
    }

    if (S[0] === 'D') {
        for (let i = 1; i <= L; i++) {
            map[i] = true;
            helper(map, 0, i);
            map[i] = false;
        }
    } else {
        for (let i = 0; i < L; i++) {
            map[i] = true;
            helper(map, 0, i);
            map[i] = false;
        }
    }

    return res % 1000000007;
};