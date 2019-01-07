/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function findNode (root, p, q) {
        if (!root) return;

        if (root.val === p.val || root.val === q.val) {
            if (findNode(root.left, p, q) || findNode(root.right, p, q)) {
                res = root;
                return;
            }
            return true;
        } 
        
        const left = findNode(root.left, p, q);
        const right = findNode(root.right, p, q);

        if (left && right) {
            res = root;
            return;
        }

        return left || right;
    }

    let res;
    findNode(root, p, q);
    return res;
};

var lowestCommonAncestor2 = function(root, p, q) {
    if (!root || root.val === p.val || root.val === q.val) return root;

    const left = lowestCommonAncestor2(root.left, p, q);
    const right = lowestCommonAncestor2(root.right, p, q);

    if (left && right) return root;
    return left || right;
};