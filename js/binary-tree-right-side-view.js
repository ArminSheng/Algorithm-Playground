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
    function dfs(root, l) {
        if (!root) return;

        if (res.length === l) {
            res.push(root.val);
        }
        
        dfs(root.right, l + 1);
        dfs(root.left, l + 1);
    }

    const res = [];
    dfs(root, 0);
    
    return res;
};