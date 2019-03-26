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

var reverseList = function(head) {
    if (!head || !head.next) return head;

    function reverse (prev, cur) {
        if (!cur.next) {
            cur.next = prev;
            return cur;
        }

        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;

        return reverse(prev, cur);
    }

    return reverse(null, head);
}

var reverseList1 = function(head) {
    let r = null;

    while (head) {
        let tmp = head.next;
        head.next = r;
        r = head;

        head = tmp;
    }

    return r;
};