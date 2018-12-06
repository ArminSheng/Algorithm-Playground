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


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = {};
    const trie = new Trie();

    for (let w of words) trie.insert(w);
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            bTracking(i, j, '');
        }
    }

    function bTracking(i, j, str) {
        if (!board[i] || !board[i][j]) {
            return;
        };
        
        if (board[i][j] === '#') {
            return;
        }
        
        let char = board[i][j];
        let objWord = str + char;

        if (!trie.startsWith(objWord)) return;
        
        if (trie.search(objWord)) {
            res[objWord] = 1;
        }
        
        let temp = board[i][j];
        board[i][j] = '#';
        
        bTracking(i, j + 1, objWord);
        bTracking(i + 1, j, objWord);
        bTracking(i - 1, j, objWord);
        bTracking(i, j - 1, objWord);
        
        board[i][j] = temp;
    }
    
    return Object.keys(res);
};