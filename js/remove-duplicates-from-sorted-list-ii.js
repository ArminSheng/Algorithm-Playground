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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    let len = 0;
    let h = head;
    let prev;

    const nodes = [];
    while (h) {

        if (prev && h.val === prev.val) {
            nodes[len] = nodes[len - 1] = null;
        } else {
            nodes[len] = h;
        }

        len++;
        prev = h;
        h = h.next;
    }

    let res;
    let tail;
    res = tail = new ListNode();

    for (let n of nodes) {
        if (n) {
            n.next = null;
            tail.next = n;
            tail = n;
        }
    }

    return res.next;
};