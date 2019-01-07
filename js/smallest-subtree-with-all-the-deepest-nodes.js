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
var subtreeWithAllDeepest = function(root) {
    function dfs (root, lvl) {
        if (!root) return lvl;

        const l = dfs(root.left, lvl + 1);
        const r = dfs(root.right, lvl + 1);

        if (l === r && l >= max) {
            res = root;
            max = l;
        }

        return Math.max(l, r);
    }

    let res;
    let max = 0;
    dfs(root, 0);
    return res;
};

var subtreeWithAllDeepest2 = function (root) {
    if(!root) return;

    const left = depth(root.left);
    const right = depth(root.right);

    if(left === right) return root;
    if(left > right) return subtreeWithAllDeepest(root.left);
    else return subtreeWithAllDeepest(root.right);
}

function depth(root) {
    if(!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
}