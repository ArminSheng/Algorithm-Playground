/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    function dfs (node) {
        if (!node) return;

        const l = dfs(node.left) || 'l';
        const r = dfs(node.right) || 'r';
        const key = l + node.val + r;

        map[key] = map[key] || 0;
        map[key]++;

        if (map[key] === 2) {
            res.push(node);
        }

        return key;
    }

    const map = {};
    const res = [];
    dfs(root);

    return res;
};