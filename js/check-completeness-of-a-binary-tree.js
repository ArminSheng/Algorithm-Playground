/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const q = [root];
    const arr = [];

    while (q.length) {
        root = q.shift();
        arr.push(root || null);

        if (root) {
            q.push(root.left);
            q.push(root.right);
        }
    }

    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i]) break;
        if (arr[i] === null) delete arr[i];
    }

    return !arr.includes(null);
};

var isCompleteTree2 = function(root) {
    let hasNull = false;
    const q = [root];

    while (q.length) {
        root = q.shift();
        
        if (!root) hasNull = true;
        if (root && hasNull) return false;

        if (root) {
            q.push(root.left || null);
            q.push(root.right || null);
        }
    }

    return true;
};