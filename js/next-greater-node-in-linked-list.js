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
    const res = [];
    let i = 0;
    const stack = [];

    while (head) {
        head.i = i;
        res[i] = 0;

        while (stack.length) {
            let node = stack[stack.length - 1];
            if (node.val < head.val) {
                res[node.i] = head.val;
                stack.pop();
            } else {
                break;
            }
        }

        stack.push(head);
        head = head.next;
        i++;
    }

    return res;
}

var nextLargerNodes1 = function(head) {
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