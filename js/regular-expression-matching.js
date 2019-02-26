/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (p === '.*') return true;

    const m = s.length;
    const n = p.length;
    const dp = [];

    for (let i = 0; i <= m + 1; i++) {
        dp[i] = [];
    }

    dp[0][0] = true;
    for (let i = 0; i < n; i++) {
        // dp[i][n] = true;
        if (p[i] === '*' && dp[0][i-1]) {
            dp[0][i+1] = true;
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // if (p[j] === '*') {
            //     if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
            //         dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j];
            //     } else {
            //         dp[i][j] = dp[i][j - 2];
            //     }
            // }
            if ((p[j] === s[i] || p[j] === '.')) {
                dp[i + 1][j + 1] = dp[i][j];
            }

            if (p.charAt(j) == '*') {
                if (p.charAt(j-1) != s.charAt(i) && p.charAt(j-1) != '.') {
                    dp[i+1][j+1] = dp[i+1][j-1];
                } else {
                    dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]);
                }
            }
        }
    }

    return dp[m][n] || false;
}

var isMatch2 = function(s, p) {
    if (!p) return !s;

    if (p.length === 1) {
        return s.length === 1 && (p === s || p === '.');
    }

    if (p[1] !== '*') {
        return s &&  (p[0] === s[0] || p[0] === '.') && isMatch(s.substr(1), p.substr(1));
    }

    while ((p[0] === s[0] || p[0] === '.') && s) {
        if (isMatch(s, p.substr(2))) return true;
        s = s.substr(1);
    }

    return isMatch(s, p.substr(2));
};