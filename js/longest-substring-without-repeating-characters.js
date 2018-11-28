/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    
    let maxStr;
    let maxLen = 1;
    
    for (let i = 0, len = s.length; i < len; i++) {
        maxStr = s[i];
        for (let j = i + 1; j < len; j++) {
            if (!maxStr.includes(s[j])) {
                maxStr += s[j];
                maxLen = Math.max(maxLen, maxStr.length);
            } else break;
        }
    }
    
    return maxLen;
};

var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, max = 0;
    let substr = '';
    let len = s.length;
    while (i < len && j < len) {
        substr = s.substring(i, j);
        if (!substr.includes(s[j])) {
            // maxStr += s[j++];
            j++;
            max = Math.max(max, j - i)
        } else {
            // maxStr = maxStr.substr(1);
            i++;
        }
    }

    return max;
};