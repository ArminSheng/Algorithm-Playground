/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//  Best solution
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
}

var getIntersectionNode2 = function(headA, headB) {
    let a = headA;
    let b = headB;
    let c;
    let d;
    let count = 0;

    while (a || b) {
        if (a === b) return a;
        if (!a || !b) {
            count++;
            c = a ? headA : headB;
            d = a ? headB : headA;
        }

        a = a && a.next;
        b = b && b.next;
    }

    while (count) {
        c = c.next;
        count--;
    }

    while (c) {
        if (c === d) return c;

        c = c.next;
        d = d.next;
    }

    return null;
}

// Stupid solution
var getIntersectionNode1 = function(headA, headB) {
    let a = headA;
    let b = headB;

    while (a) {
        b = headB;
        while (b) {
            if (a === b) return a;
            b = b.next;
        }

        a = a.next;
    }

    return null;
};