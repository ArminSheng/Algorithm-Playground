/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    function dfs(root) {
        if (!root) return null;

        const val = root.val;
        const left = dfs(root.left);
        const right = dfs(root.right);
        const sum = val + left + right;
        const _max = Math.max(left + val, right + val, val);

        max = Math.max(max, sum, _max);
        return _max;
    }

    let max = -Infinity;
    dfs(root);
    
    return max;
};