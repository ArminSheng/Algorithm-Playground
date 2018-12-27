/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = [root];
    const res = [];
    let n;

    while (stack.length) {
        n = stack.pop();
        if (!n) continue;
        stack.push(n.left);
        stack.push(n.right);
        res.unshift(n.val);
    }

    return res;
};