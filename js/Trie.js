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
