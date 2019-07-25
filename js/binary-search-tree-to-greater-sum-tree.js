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
var bstToGst = function(root) {
    const sum = dfs(root);
    inOrderDfs(root, sum);
    return root;
};

const inOrderDfs = (root, sum) => {
    if (!root) return sum;

    let _sum = inOrderDfs(root.left, sum);

    [root.val, _sum] = [_sum, _sum - root.val];

    return inOrderDfs(root.right, _sum);
}

const dfs = (root) => {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    return left + right + root.val;
}