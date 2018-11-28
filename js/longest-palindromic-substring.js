/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) {
        return s;
    }

    let start = 0, end = 0;

    for (let i = 0, len = s.length; i < len; i++) {
        let max = Math.max(findLongest(s, i, i), findLongest(s, i, i+1));
        if (max > end - start) {
            start = Math.ceil(i - ((max - 1) / 2));
            end = Math.ceil(i + (max / 2));
        }
    }

    function findLongest (s, i, j) {
        while (i > 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }

       return j - i - 1;
    }
	console.log(start, end)
    return s.substring(start, end + 1);
};
// Manacher’s Algorithm
// https://articles.leetcode.com/longest-palindromic-substring-part-ii/
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;
    
    function preSet (s) {
        return '^#' + s.split('').join('#') + '#$';
    }

    const T = preSet(s);
    const len = T.length;
    const p = [];

    let center = 0, right = 0;

    for (let i = 1; i < len - 1; i++) {
        let iMirror = 2 * center - i;
        p[i] = right > i ? Math.min(p[iMirror], right - i) : 0;

        while (T[i + p[i] + 1] === T[i - p[i] - 1]) {
            p[i]++;
        }
        
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }

    let max = 0, centerIdx = 0;
    for (let i = 0; i < len - 1; i++) {
        if (p[i] > max) {
            max = p[i];
            centerIdx = i;
        }
    }
    
    return s.substr(parseInt((centerIdx - max - 1) / 2), max);
}
