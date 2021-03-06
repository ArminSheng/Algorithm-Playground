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
      function insert(root, node) {
        if (node.val > root.val) {
          if (!root.right) {
            root.right = node;
          } else {
            insert(root.right, node);
          }
        } else {
          if (!root.left) {
            root.left = node;
          } else {
            insert(root.left, node);
          }
        }
      }
  
      let i = 1;
      const root = new TreeNode(data[0]);
  
      while (i < data.length) {
        if (data[i] !== null) {
          insert(root, new TreeNode(data[i]));
        }
        i++;
      }
  
      return root;
  };
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */