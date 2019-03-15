/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if (s.length < 2) return 0;

    const dp = Array(s.length).fill(0).map((_, i) => i);

    for (let i = 1; i < s.length; i++) {
        if (isPalindrome(s.substring(0, i + 1))) {
            dp[i] = 0;
        } else {
            for (let j = 1; j <= i; j++) {
                if (isPalindrome(s.substring(j, i + 1))) {
                    dp[i] = (dp[j - 1] + 1) > dp[i] ? dp[i] : (dp[j - 1] + 1);
                }
            }
        }
    }

    return dp[s.length - 1];
};

function isPalindrome(s) {
    let first = 0;
    let end = s.length - 1;
    while(first < end) {
        if(s[first++] != s[end--])
            return false;
    }
    return true;
}