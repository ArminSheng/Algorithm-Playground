/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect1 = function(root) {
    if (!root) return;
    if (root.left) {
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
        }
    }

    connect(root.left);
    connect(root.right);
};

var connect2 = function(root) {
    function _connect(left, right) {
        if (!left) return;
        left.next = right;
        _connect(left.left, left.right);
        _connect(right.left, right.right);
        _connect(left.right, right.left);
    }

    _connect(root.left, root.right);
};

var connect = function(root) {
    function bfs(root, l) {
        if (!root) return;
        nodes[l] = nodes[l] || [];
        nodes[l].push(root);
        bfs(root.left, l + 1);
        bfs(root.right, l + 1);
    }
    
    const nodes = [];
    bfs(root, 0);

    for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes[i].length; j++) {
            nodes[i][j].next = nodes[i][j + 1] || null;
        }
    }
};