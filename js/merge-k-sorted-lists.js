/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const map = {};

    for (let l of lists) {
        while (l) {
            map[l.val] = map[l.val] || [];
            map[l.val].push(l);
            l = l.next;
        }
    }

    const head = new ListNode(0); 
    let tail = head;
    const keys = Object.keys(map).sort((a, b) => a - b);
    
    for (let i of keys) {
        let nodes = map[i];

        for (let node of nodes) {
            tail.next = node;
            tail = node;
        }
    }

    return head.next;
};