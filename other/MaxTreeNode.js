/**
 * @param root the root of binary tree
 * @return the max ndoe
 */
function maxNode (node) {
	const max = (a, b) => {
		if (!a) return b;
		if (!b) return a;
		
		return a.val > b.val ? a : b;
 	};

 	if (!node) return node;

 	return max(node, max(maxNode(node.left), maxNode(node.right)))
}