/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;

    const stack = [s[0]];
    const map = {
        ']': '[',
        ')': '(',
        '}': '{',
    };

    for (let i = 1; i < s.length; i++) {
        if (!map[s[i]]) {
            stack.push(s[i]);
        } else if (map[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        } else return false;
    }

    return !stack.length;
};