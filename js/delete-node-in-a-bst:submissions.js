/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;

    if (root.val === key) {
        root = deleteMin(root);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }

    return root;
};

function deleteMin(node) {
    if (!node.right) return node.left;
    if (!node.left) return node.right;

    let root = node.right;

    while (root.left) {
        root = root.left;
    }

    node.right = deleteNode(node.right, root.val);
    node.val = root.val;

    return node;
}