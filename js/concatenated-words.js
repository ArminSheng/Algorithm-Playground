/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const res = [];
    const trie = new Trie();

    for (let w of words) {
        if (!w) continue;
        trie.insert(w);
    }

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (!w) continue;

        if (helper(trie, 0, w, w.length, false)) {
            res.push(w);
        }
    }

    function helper (t, index, word, len, hasLeastOne) {
        for (let i = index; i < len; i++) {
            const str = word.slice(index, i + 1);
            if (!t.startsWith(str)) return false;

            if (t.search(str)) {
                if (i === len - 1 && hasLeastOne) {
                    return true;
                }

                if (helper(t, i + 1, word, len, true)) {
                    return true;
                }
            }
        }

        return false;
    }

    return res;
};

class TrieNode {
    constructor (val) {
        this.val = val;
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor () {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert (word) {
        let root = this.root;
        for (let i = 0, len = word.length; i < len; i++) {
            let char = word[i];
            let node = root.children[char] || new TrieNode(char);

            if (i === len - 1) {
                node.isTerminal = true;
            }

            if (!root.children[char]) {
                root.children[char] = node;
            }

            root = node;
        }
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search (word) {
        let root = this.root;
        for (let i = 0, len = word.length; i < len; i++) {
            let char = word[i];
            if (root.children[char]) {
                root = root.children[char];

                if (root.isTerminal && i === len - 1) return true;
            } else {
                return false;
            }
        }

        return false;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith (prefix) {
        let root = this.root;
        for (let i = 0, len = prefix.length; i < len; i++) {
            let char = prefix[i];
            if (root.children[char]) {
                root = root.children[char];
            } else {
                return false;
            }
        }

        return true;
    }
}