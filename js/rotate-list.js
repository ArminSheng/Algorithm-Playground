/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    const nodes = [];
    const vals = [];

    while (head) {
        nodes.push(head);
        vals.push(head.val);
        head = head.next;
    }

    for (let i = 0, len = nodes.length; i < len; i++) {
        nodes[(i + k) % len].val = vals[i];
    }

    return nodes[0];
};