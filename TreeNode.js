class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}

  traverse (fn) {
    const _traverse = (node, fn) => {
      fn(node);
      node.left && _traverse(node.left, fn);
      node.right && _traverse(node.right, fn);
    }

    _traverse(this, fn);
  }
};