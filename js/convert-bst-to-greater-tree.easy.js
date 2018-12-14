/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    const helper = function(root, lastRootVal) {
        if (!root) return 0;
        let origin = root.val;
        let rightChildVal = helper(root.right, lastRootVal);
        root.val += lastRootVal + rightChildVal;
        let left = helper(root.left, root.val);
        return origin + rightChildVal + left;
    }
    helper(root, 0);
    return root;
};