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
var widthOfBinaryTree = function(root) {
    function helper (root, w, h) {
        if (!root) {
            res = 0;
            return;
        }

        helper(root.left, w - 1, h + 1);
        helper(root.right, w + 1, h + 1);

        arr[h] = arr[h] || [];

        if (isNaN(arr[h][0])) arr[h][0] = w;
        else arr[h][1] = w;

        const left = arr[h][0];
        const right = arr[h][1];

        if (!isNaN(left) && !isNaN(right)) {
            res = Math.max(res, (1 << h) - (2 * h - (right - left)));
        }
        console.log(left, right, h, w);
    }

    let res = 1;
    const arr = [];
    helper(root, 0, 0);

    return res;
};