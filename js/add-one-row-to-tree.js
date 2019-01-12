/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (!root) return;

    let temp;
    if (d <= 1) {
        temp = root;
        root = new TreeNode(v);
        root.left = temp;
        return root;
    }
    
    function dfs (root, lvl) {
        if (!root) return;

        if (lvl < d - 1) {
            dfs(root.left, lvl + 1);
            dfs(root.right, lvl + 1);
            return;
        }

        temp = root.left;
        let n = new TreeNode(v);
        root.left = n;
        n.left = temp;

        temp = root.right;
        n = new TreeNode(v);
        root.right = n;
        n.right = temp;
    }

    dfs(root, 1);
    return root;
};