/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

}

var characterReplacement = function(s, k) {
    let [count, len] = [0, s.length];

    for (let i = 0; i < len; i++) {
        if (s[i] === s[i - 1]) {
            continue;
        }

        let res = 1;
        let cur = s[i];
        let j = i + 1;
        let remain = k;

        while (remain > -1 && j < len) {
            if (s[j] !== cur) {
                remain--;
            }

            j++;
            res++;
        }

        res += remain;
        if (res > count) {
            count = res;
        }
    }

    return count > len ? len : count;
};