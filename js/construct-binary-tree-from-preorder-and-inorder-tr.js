/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;

    const val = preorder[0];
    const rootIdx = inorder.lastIndexOf(val);
    const root = new TreeNode(val);
    
    root.left = buildTree(preorder.slice(1, rootIdx + 1), inorder.slice(0, rootIdx));
    root.right = buildTree(preorder.slice(rootIdx + 1, preorder.length), inorder.slice(rootIdx + 1, inorder.length));
    return root;
};