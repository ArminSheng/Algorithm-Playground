/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const nums = [];
    let i = 0;
    
    function traverse (node, i) {
        if (!node) return;
        
        nums[i] = nums[i] || [];
        nums[i].push(node.val);

        traverse(node.left, i + 1);
        traverse(node.right, i + 1);
    }
    
    traverse(root, 0);
    return nums;
};