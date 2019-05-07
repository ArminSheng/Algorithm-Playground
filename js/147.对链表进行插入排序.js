/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 *
 * https://leetcode-cn.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (55.87%)
 * Total Accepted:    5.7K
 * Total Submissions: 10.1K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 对链表进行插入排序。
 * 
 * 
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 
 * 
 * 插入排序算法：
 * 
 * 
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2：
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 * 
 * 
 */
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
var insertionSortList = function(head) {
    let h = head.next;
    let cur;
    let tail = head;
    head.next = null;
    let res = new ListNode();

    while(h) {
        cur = h;
        if (cur.val < head.val) {
            cur.next = head;
            tail = head;
            head = cur;
        } else {
            while (head) {
                if 
            }
            tail.next = cur;
            tail = cur;
        }
        h = h.next;
    }
}

var insertionSortList1 = function(head) {
    const arr = [];

    while (head) {
        arr.push(head);
        head = head.next;
    }

    arr.sort((a, b) => a.val - b.val);

    const res = new ListNode();

    arr.reduce((prev, cur) => {
        cur.next = null;
        prev.next = cur;
        return cur;
    }, res);

    return res.next;
};

