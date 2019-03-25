/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let last;
    let cur = head;
    let next;
    head = head.next;

    while (cur && cur.next) {
        next = cur.next
        cur.next = next.next;
        next.next = cur;

        if (last) last.next = next;

        last = cur;
        cur = cur.next;
    }

    return head;
}

// Recursively
var swapPairs2 = function(head) {
    if (!head || !head.next) return head;

    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;

    return next;
};