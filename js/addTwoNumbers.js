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
    let node = new ListNode();
    let prev = null;
    let nextVal = 0;
    let head = null;

    while (l1 || l2) {
        l1 = l1 || {val: 0};
        l2 = l2 || {val: 0};
        
        let val = (l1.val + l2.val + nextVal) % 10;
        nextVal = Math.floor((l1.val + l2.val + nextVal) / 10);
        let node = new ListNode(val);
        
        l1 = l1.next;
        l2 = l2.next;
        
        if (!l1 && !l2 && nextVal) {
            node.next = new ListNode(nextVal);
        }
        
        if (prev) {
            prev.next = node;
            prev = node;
        } else {
            head = prev = node;
        }  
    }

    return head;
};

var addTwoNumbers2 = function(l1, l2) {
    
};