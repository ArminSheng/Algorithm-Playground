/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    const len = nums.length;
    if (!len) return 0;

    const root = build(nums, 0, len - 1);
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            const sum = getSum(root, i, j);
            if (sum >= lower && sum <= upper) {
                count++;
            }
        }
    }

    return count;
};
            // function dfs(root, lo, up) {
            //     if (!root) return;

            //     dfs(root.left, lo, up);
            //     dfs(root.right, lo, up);

            //     if (root.val >= lo && root.val <= up) {
            //         count++;
            //     }
            // }

            // dfs(root, lower, upper);

function getSum (root, i, j) {
    if (!root) return 0;

    const { start, end } = root;
    let lt, ri;

    if (start === i && end === j) {
        return root.val;
    }

    const mid = start + end >> 1;

    if (i >= start && j <= mid) {
        return getSum(root.left, i, j);
    }

    else if (i > mid) {
        return getSum(root.right, i, j);
    } else {
        lt = getSum(root.left, i, mid);
        ri = getSum(root.right, mid + 1, j);

        return lt + ri;
    }
}

function build (nums, i, j) {
    let root = new Node(null, i, j);

    if (i === j) {
        root.val = nums[i];
    } else {
        const mid = i + j >> 1;
        root.left = build(nums, i, mid);
        root.right = build(nums, mid + 1, j);
        root.val = root.left.val + root.right.val;
    }

    return root;
}

function Node(val, i, j) {
    this.val = val;
    this.start = i;
    this.end = j;
    this.left = null;
    this.right = null;
}