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
    let sum = 0;
    function reverseInorder (root) {
        if (!root) return;

        reverseInorder(root.right);

        root.val += sum;
        sum = root.val;

        reverseInorder(root.left);
    }

    reverseInorder(root);
    return root;
};


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
    return root ? dfs(root.left) + dfs(root.right) + root.val : 0;
}