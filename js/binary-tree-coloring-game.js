/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    const mid = n >> 1;
    let res = false;

    function dfs (root, mid, x) {
        if (!root) return 0;
        const l = dfs(root.left, mid, x);
        const r = dfs(root.right, mid, x);

        if (root.val === x) {
            if (l > mid || r > mid || (l + r + 1 <= mid)) {
                res = true;
                return;
            }
        }

        return l + r + 1;
    }

    dfs(root, mid, x);

    return res;
};