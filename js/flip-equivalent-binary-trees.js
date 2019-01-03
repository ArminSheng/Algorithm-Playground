/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (!root1 || !root2) {
        return root1 == root2;
    }

    if (root1.val !== root2.val) return false;

    if ((root1.left && root2.right && root1.left.val === root2.right.val) 
        || (root1.right && root2.left && root1.right.val === root2.left.val)) {
        return flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
    }

    return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
};

var flipEquiv2 = function(root1, root2) {
    if (!root1 || !root2) {
        return root1 == root2;
    }

    if (root1.val !== root2.val) return false;

    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) 
        || (flipEquiv(root1.right, root2.left) && flipEquiv(root1.left, root2.right));
};

export default flipEquiv;