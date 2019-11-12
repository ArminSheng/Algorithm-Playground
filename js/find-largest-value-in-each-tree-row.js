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
var largestValues = function(root) {
    const ans = [];
    function dfs (root, lvl) {
        if (!root) return;
        ans[lvl] = Math.max(ans[lvl] === undefined ? -Infinity : ans[lvl], root.val);

        dfs(root.left, lvl + 1);
        dfs(root.right, lvl + 1);
    }

    dfs(root, 0);
    return ans;
};