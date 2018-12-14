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
var isValidBST = function(root) {
    if (!root) return true;
    
    let flag = true;
    function helper(root) {
        if (!root) return {min: Infinity, max: -Infinity};

        let left = helper(root.left);
        let right = helper(root.right);

        if (root.val <= left.max) {
            flag = false;
        }
        
        if (root.val >= right.min) {
            flag = false;
        }

        return {
            min: Math.min(left.min, root.val),
            max: Math.max(right.max, root.val)
        }
    }
    
    helper(root);
    return flag;
};

var isValidBST2 = function(root) {
    function LDR (root) {
        if (!root) return;

        LDR(root.left);
        arr.push(root.val);
        LDR(root.right);
    }
    
    const arr = [];
    LDR(root);
    let i = 1;

    if (arr.length < 2) return true;

    while (i < arr.length) {
        if (arr[i] <= arr[i - 1]) return false;
    }

    return true;
};