/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

var flatten = function(head) {

    function dfs (head) {
        if (!head) return head;
        let h = head;

        while (h) {
            if (h.child) {
                const next = h.next;
                const child = h.child;
                const tail = dfs(child);

                if (tail) {
                    tail.next = next;
                    if (next) {
                        next.prev = tail;
                    }
                    child.prev = h;
                }

                h.next = child;
                h.child = null;
            }

            if (h.next) h = h.next;
            else break;
        }

        return h;
    }
    dfs (head);

    return head;
}

var flatten2 = function(head) {
    const arr = [];
    function dfs (head) {
        if (!head) return head;

        arr.push(head);
        dfs(head.child);
        dfs(head.next);
        head.next = null;
        head.child = null;
    }

    dfs(head);
    for (let i = 0; i < arr.length; i++) {
        const node = arr[i];
        node.next = arr[i + 1] || null;
        node.prev = arr[i - 1] || null;
    }

    return arr[0] || null;
}

var flatten1 = function(head) {
    if (!head) return null;
    const next = flatten(head.next);
    const child = flatten(head.child);
    const tail = getTail(child);

    if (tail) {
        tail.next = next;
        if (next) {
            next.prev = tail;
        }
        child.prev = head;
        head.next = child;
    }

    head.child = null;
    return head;
};

function getTail (head) {
    if (!head) return head;

    let h = head;
    while (h.next) {
        h = h.next;
    }

    return h;
}
