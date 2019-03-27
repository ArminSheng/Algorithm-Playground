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
    if (!head || !head.next || !k) return head;
    let h = head;
    let tail, prev;
    let len = 0;

    while (head) {
        len++;
        tail = head;
        head = head.next;
    }

    let n = len - (k % len);

    if (n === len) return h;

    head = h;
    while (n > 0) {
        n--;
        prev = head;
        head = head.next;
    }

    prev.next = null;
    tail.next = h;
    return head;
}

var rotateRight1 = function(head, k) {
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