/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queue = [];
    
    queue.push(root);
    queue.push(root);
    while(queue.length) {
        let t1 = queue.pop();
        let t2 = queue.pop();
        
        if (!t1 && !t2) continue;
        
        if ((!t1 || !t2) || t1.val !== t2.val) {
            return false;
        }
        
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t2.right);
        queue.push(t1.left);
    }
    
    return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * Recursive version
 */
var isSymmetric = function(root) {
    function isEqual(left, right) {
        if (!left || !right) return left === right;
        
        return left.val === right.val 
            && isEqual(left.left, right.right) 
            && isEqual(left.right, right.left);
    }
    
    return isEqual(root, root);
};