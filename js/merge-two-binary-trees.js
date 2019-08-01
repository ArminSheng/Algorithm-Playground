/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null;

    const n = new TreeNode(0);
    if (t1) n.val += t1.val;
    if (t2) n.val += t2.val;

    n.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    n.right = mergeTrees(t1 && t1.right, t2 && t2.right);

    return n;
};