/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (33.71%)
 * Total Accepted:    4.4K
 * Total Submissions: 12.8K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 * 
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * 
 * 示例 1:
 * 
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 * 
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

var insert = function(intervals, newInterval) {
    return merge(intervals.concat(newInterval));
}

var merge = function(intervals) { 
    intervals = intervals.sort((a, b) => a.start - b.start);

    let interval = intervals[0];
    const res = [];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        if (current.start <= interval.end) {
            interval.start = Math.min(interval.start, current.start);
            interval.end = Math.max(interval.end, current.end);
        } else {
            res.push(interval);
            interval = current;
        }
    }
    
    interval && res.push(interval)

    return res;
}

var insert1 = function(intervals, newInterval) {
    const len = intervals.length;
    if (!len) return [newInterval];

    
    let n = newInterval;
    // let insertIndex;
    if (n.end < intervals[0].start) {
        return [n, ...intervals];
    } else if (n.start > intervals[len - 1].end) {
        return [...intervals, n];
    } else {
        insertIndex = insertAfter(intervals, n.start, 0, len - 1);

        // if (insertIndex > 0) {
        //     if (intervals[insertIndex - 1].end >= n.start);
        //     insertIndex--;
        // }
    }
    // insertIndex = insertAfter(intervals, n.start, 0, len - 1);
    // insertIndex = insertIndex === 0 ? 0: insertIndex - 1;
    let end = insertIndex;
    
    console.log(insertIndex)
    let newIntervals = [];
    for (let i = insertIndex; i < len; i++) {
        const curr = intervals[i];
        if (isOverlap(curr.start, curr.end, n.start, n.end)) {
            n.start = Math.min(curr.start, n.start);
            n.end = Math.max(curr.end, n.end);
            // newIntervals = [];
            end = i;
        } else {
            // newIntervals.push(intervals[i]);
            // break;
        }
    }
    console.log(n, end)
    newIntervals.push(n);
    return intervals
        .slice(0, insertIndex)
        .concat(newIntervals)
        .concat(intervals.slice(end + 1));
};


/**
 * @param {Interval[]} arr
 * @param {number} ele
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function insertAfter (arr, ele, low, high) {
    // if (high <= 0) return 0;
    if (low >= high) {
        // if (low > 0 && arr[low].start > ele) return low - 1;
        // else return low;
        return low;
    }

    const mid = low + high >> 1;

    if (arr[mid].start === ele) {
        return mid;
    } else if (arr[mid].start < ele) {
        return insertAfter(arr, ele, mid + 1, high);
    } else {
        return insertAfter(arr, ele, low, mid - 1);
    }
}

function isOverlap (a, b, c, d) {
    if (b < c || a > d) {
        return false;
    } else {
        return true;
    }
}
