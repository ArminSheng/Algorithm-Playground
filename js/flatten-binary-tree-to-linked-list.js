/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    let last;
    
    function _h(node) {
        if (!node) return;
        if (last) last.right = node;
        
        last = node;
        let tmp = node.right;
        
        _h(node.left);
        _h(tmp);
        node.left = null;
    }

    _h(root);
};