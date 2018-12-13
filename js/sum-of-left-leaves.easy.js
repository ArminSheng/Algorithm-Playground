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
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    
    const bfs = function(root, isLeft) {
        if (!root) return;
        
        if (isLeft && !root.left && !root.right) {
            sum += root.val;        
        }
        
        bfs(root.left, true);
        bfs(root.right);
    }
    bfs(root);
    return sum;
};