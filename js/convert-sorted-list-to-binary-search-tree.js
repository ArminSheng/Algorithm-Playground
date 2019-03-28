/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let h = head;
    let len = 0;

    while (h) {
        len++;
        h = h.next;
    }

    function convertBST(head, len) {
        if (!head || len < 1) return null;

        const mid = len >> 1;
        let node = head;

        let i = mid;
        while (i > 0) {
            i--;
            node = node.next;
        }

        const treeNode = new TreeNode(node.val);
        treeNode.left = convertBST(head, mid);
        treeNode.right = convertBST(node.next, len - mid - 1);

        return treeNode;
    }

    return convertBST(head, len);
}

var sortedListToBST1 = function(head) {
    const nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }

    function convertBST (nodes) {
        if (!nodes.length) return null;

        const mid = nodes.length >> 1;
        const node = new TreeNode(nodes[mid]);
        node.left = convertBST(nodes.slice(0, mid));
        node.right = convertBST(nodes.slice(mid + 1));
        return node;
    }

    return convertBST(nodes);
};