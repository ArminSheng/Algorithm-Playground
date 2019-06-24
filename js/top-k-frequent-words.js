/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const hash = {};

    for (let w of words) {
        if (hash[w]) {
            hash[w]++;
        } else {
            hash[w] = 1;
        }
    }

    const en = Object.entries(hash);
    en.sort((a, b) => {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }

        return b[1] - a[1];
    });

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(en[i][0]);
    }

    return res;
};