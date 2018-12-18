/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return [];
        const res = [];
        const q = [];
    
        q.push(root);
        while (q.length) {
            root = q.shift();
    
            if (root) {
            res.push(root.val);
            } else {
            res.push(null)
            continue;
            }
    
            q.push(root.left);
            q.push(root.right);
        }
        
        return res;
  };
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  var deserialize = function(data) {
        if (!data.length) return null;
        const root = new TreeNode(data.shift());
        const q = [root];
        let node = root;
        
        while (data.length) {
            node = q.shift();
            let left = data.shift();
            let right = data.shift();

            node.left = left !== null ? new TreeNode(left) : left;
            node.right = right !== null ? new TreeNode(right) : right;

            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
  
        return root;
  };
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */