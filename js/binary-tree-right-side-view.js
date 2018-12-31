/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    function dfs(root) {
        if (!root) return;
        res.push(root.val);
        dfs(root.right || root.left);
    }

    const res = [];
    dfs(root);
    
    return res;
};