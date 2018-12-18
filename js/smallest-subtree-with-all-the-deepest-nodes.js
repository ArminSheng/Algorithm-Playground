/** TODO
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
var subtreeWithAllDeepest = function(root) {
    const map = [];
    let deepest = 0;

    function helper(root, lvl) {
        if (!root) return;

        map[lvl] = map[lvl] || [];
        if (root.left || root.right) {
            map[lvl].push(root);
        }
        deepest = lvl;

        helper(root.left, lvl + 1);
        helper(root.right, lvl + 1);
    }

    helper(root, 0);

    while(map[deepest - 1].length > 1) {
        deepest--;
    }

    return map[deepest][0];
};