/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    wordList.unshift(beginWord);
    const len = wordList.length;
    const visited = [];
    const counts = Array(len).fill(1);
    const g = Array(len).fill(0).map(_ => []);

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (isSimilar(wordList[i], wordList[j])) {
                g[i].push(j);
                g[j].push(i);
            }
        }
    }

    const q = [0];
    visited[0] = true;

    while(q.length) {
        const w = q.shift();

        if (wordList[w] === endWord) {
            return counts[w];
        }

        for (let i of g[w]) {
            if (!visited[i]) {
                q.push(i);
                counts[i] = counts[w] + 1;
            }

            visited[i] = true;
        }
    }

    return 0;
};

function isSimilar (a, b) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }

    return count === 1;
}