/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let res = new ListNode();
    res.next = head;
    let prev = res;

    while (head.next) {
        if (n > 1) {
            n--;
        } else {
            prev = prev.next;
        }

        head = head.next;
    }

    prev.next = prev.next.next;

    return res.next;
};