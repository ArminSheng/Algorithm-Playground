/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    this.root = root;
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    const node = new TreeNode(v);
    return _insert(this.root, node).val;
};

function _insert(root, node) {
    if (!root.left) {
        root.left = node;
        return root;
    } 
    
    if (!root.right) {
        root.right = node;
        return root;
    }

    let l = 0;
    let r = 0;
    let lNode = root.left;
    let rNode = root.right;

    while (lNode) {
        l++;
        lNode = lNode.right;
    }

    while (rNode) {
        r++;
        rNode = rNode.right;
    }
    
    if (l === r) {
        return _insert(root.left, node);
    } else {
        return _insert(root.right, node);
    }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = Object.create(CBTInserter).createNew(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */