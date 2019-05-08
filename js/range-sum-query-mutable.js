class TreeNode {
    constructor (val, i, j) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.start = i;
        this.end = j;
    }
}

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    if (!nums.length) return;
    this.root = buildTree(nums, 0, nums.length - 1);
};

function buildTree (nums, i, j) {
    const root = new TreeNode(null, i, j);

    if (i !== j) {
        const mid = i + j >> 1;
        root.left = buildTree(nums, i, mid);
        root.right = buildTree(nums, mid + 1, j);
        root.val = root.left.val + root.right.val;
    } else {
        root.val = nums[i];
    }

    return root;
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    update(this.root, i, val);
    console.log(this.root.val)
};

function update (root, i, val) {
    if (!root) return;

    const { start, end } = root;
    if (start === end && start === i) {
        root.val = val;
        return;
    }

    if (i <= root.left.end) {
        update(root.left, i, val);
    } else {
        update(root.right, i, val);
    }
    root.val = root.left.val + root.right.val;
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return getSum(this.root, i, j);
};

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

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */