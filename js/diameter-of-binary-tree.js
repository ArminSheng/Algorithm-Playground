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
var diameterOfBinaryTree = function(root) {
    let ans = 0;

    function maxDeep (root) {
        if (!root) return 0;

        const l = maxDeep(root.left);
        const r = maxDeep(root.right);
        ans = Math.max(ans, l + r);

        return Math.max(l, r) + 1;
    }

    maxDeep(root);

    return ans;
};
