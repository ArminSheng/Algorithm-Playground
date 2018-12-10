/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    function bt(s, lastStr, path) {
        if (!s) {
            if (!lastStr) {
                res.push(path);            
            }
        } else {
            let cur = s[0] + lastStr;
            if (!cur) return;

            let remain = s.slice(1, s.length);
            if (isPalindrome(cur)) {
                bt(remain, '', path.concat([cur]));
            } 
            
            bt(remain, cur, path);
        }
    }
    
    function isPalindrome(str) {
        if (!str) return false;
        return str === str.split('').reverse().join('');
    }
    
    bt(s, '', []);
    return res;
};