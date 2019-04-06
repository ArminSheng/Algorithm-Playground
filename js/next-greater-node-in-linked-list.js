/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    if (!head) return [];
    
    function getNextLarger (head) {
        if (!head) {
            return 0;
        }
        
        const val = head.val;
        let h = head.next;
        let res = 0;
        
        while (h) {
            if (h.val > val) {
                res = h.val;
                break;
            }
            
            h = h.next;
        }
        
        return res;
    }
        
    let i = 0;
    const arr = [];
    
    while (head) {
        arr[i] = getNextLarger(head);
        i++;
        head = head.next;
    }
    
    return arr;
};