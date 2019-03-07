/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] == 0) return 0;
    const dp = [1];
    const MAX = 26;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0) {
            if (s[i - 1] + s[i] > MAX || s[i - 1] == 0) {
                return 0;
            }

            dp[i] = dp[i - 2] || 1;
        }
        
        else if (s[i - 1] == 0) {
            dp[i] = dp[i - 1];
        }

        else if (s[i - 1] + s[i] <= MAX) {
            dp[i] = dp[i - 1] + (dp[i - 2] || 1); 
        } 
        
        else {
            dp[i] = dp[i - 1];
        }
    }

    return dp[s.length - 1];
};

