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
        if (map[s[i]] && map[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return !stack.length;
};