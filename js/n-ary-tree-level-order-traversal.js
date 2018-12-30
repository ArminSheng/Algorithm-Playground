/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];

    function dfs(root, level) {
        if (!root) return;
        res[level] = res[level] || [];
        res[level].push(root.val);
        root.children.forEach(child => dfs(child, level + 1));
    }

    dfs(root, 0);
    return res;
};