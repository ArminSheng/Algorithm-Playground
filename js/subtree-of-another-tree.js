/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;

    let flag = false;
    if (s.val === t.val) {
        flag = isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
    } 
    
    return flag || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isIdentical(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;

    return s.val === t.val && isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
}