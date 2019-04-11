/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.17%)
 * Total Accepted:    12.4K
 * Total Submissions: 35.1K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
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
 * @return {Interval[]}
 */
var merge = function(intervals) {
    for (let i = 0; i < intervals.length; i++) {
        const m = intervals[i];

        for (let j = i + 1; j < intervals.length; j++) {
            const n = intervals[j];
            const a = m.start, b = m.end;
            const c = n.start, d = n.end;

            if (isOverlap(a, b, c, d)) {
                m.start = Math.min(a, c);
                m.end = Math.max(b, d);
                intervals.splice(j, 1);
                j = i;
            }
        }
    }

    return intervals;
};

function isOverlap (a, b, c, d) {
    if (b < c || a > d) {
        return false;
    } else {
        return true;
    }
}

