/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

//  Todo
var getSkyline = function(buildings) {
    const set = [];
    const map = {};
    const max = 0;

    for (let i of buildings) {
        const [x, y, h] = i;
        map[x] = Math.max(map[x] || 0, h);
        map[y] = Math.max(map[y] || 0, h);
        // set.push([x, h]);
        // set.push([y, h]);
    }

    const arr = Object.entries(map);

    for (let m of Object.entries(map)) {
        const [x, h] = m;
        if (max !== h) {
            res.push([x, h]);
        }

        m = h;
    }

    set.sort((a, b) => a[0] - b[0]);


    buildTree(set, 0, set.length - 1);

    for (let i = 0; i < buildings.length; i++) {

    }
}

function buildTree (nums, i, j) {
    const root = new TreeNode(null, i, j);

    if (i !== j) {
        const mid = i + j >> 1;
        root.left = buildTree(nums, i, mid);
        root.right = buildTree(nums, mid + 1, j);
        root.val = Math.min(root.left.val, root.right.val);
    } else {
        root.val = nums[i];
    }

    return root;
}

function Node (val, i, j) {
    this.val = val;
    this.left = null;
    this.right = null;

    this.start = i;
    this.end = j;
}

//
var getSkyline2 = function(buildings) {
    const set = [];
    const pq = [];
    const res = [];
    let max = [0, 0];

    for (let i of buildings) {
        const [x, y, h] = i;
        set.push([x, -h]);
        set.push([y, h]);
    }

    set.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }

        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
    });

    for (let s of set) {
        if (s[1] < 0) {
            pq.push([s[0], -s[1]]);
        } else {
            pq.splice(pq.findIndex(i => {
                return i[1] === s[1];
            }), 1);
        }

        const m = getMax(pq);
        if (max[1] !== m[1]) {
            res.push([s[0], m[1]]);
            max = m;
        }
    }

    return res;
};

function getMax(arr) {
    let res = [0, 0];

    arr.forEach(i => {
        if (i[1] > res[1]) {
            res = i;
        }
    });

    return res;
}