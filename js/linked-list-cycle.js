/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    const set = new Set;
    
    while (head) {
        if (set.has(head)) return true;
        
        set.add(head);
        head = head.next;
    }
    
    return false;
}

//  快慢指针
var hasCycle1 = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast) {
        fast = fast.next;
        slow = slow.next;
        
        if (!fast) return false;
        
        fast = fast.next;
        
        if (fast === slow) return true;
    }
    
    return false;
};