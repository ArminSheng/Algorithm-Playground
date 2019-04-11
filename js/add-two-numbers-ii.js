/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];

    while (l1) {
        arr1.push(l1);
        l1 = l1.next;
    }

    while (l2) {
        arr2.push(l2);
        l2 = l2.next;
    }

    let n1, n2, reminder = 0;
    let res;

    if (arr1.length > arr2.length) {
        arr1.unshift(new ListNode(0));
    } else {
        arr2.unshift(new ListNode(0));
    }

    while (arr1.length || arr2.length) {
        n1 = arr1.length ? arr1.pop().val : 0;
        n2 = arr2.length ? arr2.pop().val : 0;

        const n = n1 + n2 + reminder;
        const node = new ListNode(n % 10);
        reminder = n >= 10 ? 1 : 0;

        node.next = res;
        res = node;
    }

    return res && res.val === 0 ? res.next : res;
};