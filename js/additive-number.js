/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    function backtracking (n1, n2, str) {
        if (!str.length) return false;

        for (let i = 1, len = str.length; i <= len; i++) {
            let cur = str.substr(0, i);
            if (cur[0] == 0 && cur.length > 1) continue;
            let n3 = parseInt(cur);

            if (n1 + n2 === n3) {
                if (i === str.length) {
                     return true;                 
                }
                
                if (backtracking(n2, n3, str.substr(i, len))) return true;
            }
        }
        
        return false;
    }
    
    for (let i = 1, len = num.length; i < len; i++) {
        for (let j = 1; j + i < len; j++) {
            let n1 = num.substr(0, i);
            let n2 = num.substr(i, j);
            
            if ((n1[0] == 0 && n1.length > 1) || (n2[0] == 0 && n2.length > 1)) continue;

            if (backtracking(parseInt(n1), parseInt(n2), num.substr(j + i, len))) {
                return true;
            }
        }
    }
    
    return false;
};