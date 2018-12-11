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
var zigzagLevelOrder = function(root) {
    const nums = [];
    
    function bfs(root, left, index) {
        if (!root) return;

        nums[index] = nums[index] || [];

        if (left) {
            nums[index].push(root.val);
        } else {
            nums[index].unshift(root.val);
        }

        bfs(root.left, !left, index + 1);
        bfs(root.right, !left, index + 1);
    }

    bfs(root, true, 0)
    return nums;
};