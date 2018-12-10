/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const distance = {};
    const res = [];
    wordList.push(beginWord);

    function bfs (word, wordList, distance) {
        distance[word] = 0;
        let words = [word];
        let next;
        
        while (words.length) {
            next = words.shift();
            for (let w of getNextList(next, wordList)) {
                if (distance[w] === undefined) {
                    distance[w] = distance[next] + 1;
                    words.push(w);
                }
            }
        }
    }
    
    function getNextList(word, wordList) {
        const CHARS = 'abcdefghijklmnopqrstuvwxyz';
        const res = [];
        
        for (let i = 0, len = word.length; i < len; i++) {
            for (let c of CHARS) {
                if (word[i] !== c) {
                    let nWord = word.slice(0, i) + c + word.slice(i + 1, len);
                    if (wordList.includes(nWord)) {
                        res.push(nWord);
                    }
                }
            }
        }
    
        return res;
    }

    function dfs(word, endWord, distance, wordList, path, res) {
        if (word === endWord) {
            res.push(path);
        } else {
            for (let w of getNextList(word, wordList)) {
                if (distance[w] === distance[word] - 1) {
                    dfs(w, endWord, distance, wordList, [...path, w], res);
                }
            }
        }
    };

    bfs(endWord, wordList, distance);
    dfs(beginWord, endWord, distance, wordList, [beginWord], res);

    return res;
};
