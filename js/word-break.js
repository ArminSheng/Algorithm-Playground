/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length).fill(false);
    const breaks = [-1];
    let sub;

    for (let i = 0; i < s.length; i++) {
        for (let start of breaks) {
            sub = s.substring(start + 1, i + 1);

            if (wordDict.includes(sub)) {
                breaks.push(i);
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length - 1];
};