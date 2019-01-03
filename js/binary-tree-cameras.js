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
var minCameraCover = function(root) {
    // Greedy
    function dfs (root, parent) {
        if (!root) return;

        dfs(root.left, root);
        dfs(root.right, root);

        if (!parent && !included.includes(root) 
            || !included.includes(root.right) 
            || !included.includes(root.left)) {
            included.push(root);
            included.push(root.left);
            included.push(root.right);
            included.push(parent);
            res++;
        }
    }

    let res = 0;
    const included = [null];
    dfs(root, null);

    return res;
};