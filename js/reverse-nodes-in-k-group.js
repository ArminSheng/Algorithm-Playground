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
var reverseKGroup = function(head, k) {
    if (!head || !head.next) return head;

    let c = 0;
    let rev = null;
    let next;
    let tail = head;

    while (head && c < k) {
        next = head.next;
        head.next = rev;
        rev = head;

        head = next;
        c++;
    }

    if (c === k) {
        tail.next = reverseKGroup(head, k);
    } else {
        return reverseKGroup(rev, c);
    }

    return rev;
};