/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let res = null;

    for (let n of nums) {
        res = helper(res, n);
    }

    return res;
}

function helper (root, next) {
    const node = new TreeNode(next);
    if (!root) return node;

    if (root.val > next) {
        root.right = helper(root.right, next);
        return root;
    } else {
        node.left = root;
        return node;
    }
}

var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;

    let max = nums[0];
    let idx = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            idx = i;
        }
    }

    let root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, idx));
    root.right = constructMaximumBinaryTree(nums.slice(idx + 1));

    return root;
};