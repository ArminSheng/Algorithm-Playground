/**
 * @param {string} S
 * @return {number}
 */

//  Best solution O(n)
var longestRepeatingSubstring = function(S) {
    let res = 0;
    const arr = [];

    for (let i = 0, len = S.length; i < len ; i++) {
        arr.push(S.substring(i, len));
    }

    arr.sort();

    for (let i = 0; i < arr.length - 1; i++) {
        let j = 0;
        while (arr[i][j] === arr[i + 1][j]) j++;
        res = Math.max(res, j);
    }

    return res;
}

// O(n2)
var longestRepeatingSubstring1 = function(S) {
    let res = 0;

    for (let i = 0; i < S.length; i++) {
        for (let j = i; j < S.length; j++) {
            const s = S.slice(i, j + 1);

            if (S.indexOf(s) !== S.lastIndexOf(s)) {
                res = Math.max(s.length, res);
            } else continue;
        }
    }

    return res;
};