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
var sumNumbers = function(root) {
    let sum = 0;
    function helper(root, num) {
        if (!root) return;
        
        num += root.val
        if (!root.left && !root.right) {
            sum += parseInt(num);
            return;
        }
        
        helper(root.left, num);
        helper(root.right, num);
    }
    helper(root, '');
    return sum;
};

var sumNumbers2 = function(root) {
    let sum = 0;
    function helper(root, num) {
        if (!root) return;
        
        num *= 10;
        num += root.val;
        if (!root.left && !root.right) {
            sum += num;
            return;
        }
        
        helper(root.left, num);
        helper(root.right, num);
    }
    helper(root, '');
    return sum;
};