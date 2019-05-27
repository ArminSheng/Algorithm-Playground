/**
 * @param {number[]} nums
 * @return {number[]}
 */

var reversePairs = function(nums) {
    let count = 0;

    const mergeSort = function (arr) {
        const len = arr.length;
        if (len < 2) return arr;

        const mid = len >> 1;
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        let i = 0;
        let j = mid;

        while (i < mid && j < len) {
            if (left[i] > 2 * right[j]) {
                count += mid - i;
                j++;
            } else {
                i++;
            }
        }

        return merge(left, right);
    }

    const merge = function (lt, ri) {
        const tmp = [];
        let i = 0;
        let j = 0;

        while (i < lt.length && j < ri.length) {
            if (lt[i] < ri[j]) {
                tmp.push(lt[i]);
                i++;
            } else {
                tmp.push(ri[j]);
                j++;
            }
        }

        if (i < lt.length) {
            return tmp.concat(lt.slice(i));
        } else if (j < ri.length) {
            return tmp.concat(ri.slice(j));
        }
    }

    mergeSort(nums);

    return count;
}

//  Error
var reversePairs3 = function(nums) {
    const len = nums.length;
    const hash = {};
    const sorted = nums.slice().sort((a, b) => a - b);
    const set = Array.from(new Set(sorted));
    const map = Array(set.length + 1).fill(0);
    let res = 0;

    for (let i = 0; i < set.length; i++) {
        hash[set[i]] = i + 1;
    }

    for (let i = len - 1; i > - 1; i--) {
        const j = hash[nums[i]];
        let tmp;
        tmp = (nums[i] + 1) / 2;

        if (nums[i] < 0) {
            tmp = nums[i] / 2;
        }

        const lower = binarySearchBound(set, tmp);
        if (set[j] > 2 * set[lower]) {
            res += map[lower];
        }

        res += sum(lower);
        add(j, 1);
    }

    function add (x, num) {
        while (x <= len) {
            map[x] += num;
            x  += lowbit(x);
        }
    }

    function sum (x) {
        let res = 0;

        while (x) {
            res += map[x];
            x -= lowbit(x);
        }

        return res;
    }

    return res;
}

function lowbit (x) {
    return x & -x;
}

function binarySearchBound (arr, target) {
    // if (searchCache[idx] !== undefined) return;

    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = (low + high) >> 1;
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return mid;
}

// Second
var reversePairs2 = function(nums) {
    const len = nums.length;
    let res = 0;
    const root = new Node(nums[len - 1], len - 1);

    for (let i = len - 2; i > -1; i--) {
        const node = new Node(nums[i], i);
        sum(root, nums[i] / 2);
        insert(root, node);
    }

    function sum (root, val) {
        if (!root) return res;
        if (root.val < val) {
            res += root.count + 1;
            return sum(root.right, val);
        } else return sum(root.left, val);
    }

    return res;
};


function insert (root, node) {
    if (node.val <= root.val) {
        root.count++;
        if (!root.left) root.left = node;
        else insert(root.left, node);
    } else {
        // res[node.index] += root.count + 1;
        if (!root.right) root.right = node;
        else insert(root.right, node);
    }
}

function Node (val, index) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 0;
    this.index = index;
}

var reversePairs1 = function(nums) {
    const len = nums.length;
    let res = 0;
    const sorted = nums.slice().sort((a, b) => a - b);
    const hash = {};
    const set = Array.from(new Set(sorted));
    const map = Array(set.length).fill(0);
    const searchCache = [];

    for (let i = 0; i < set.length; i++) {
        hash[set[i]] = i;
    }

    for (let i = len - 1; i > - 1; i--) {
        const j = hash[nums[i]];
        res += sum(j);
        map[j]++;
    }

    function sum (k) {
        let res = 0;
        const v = set[k] / 2;
        const lower = binarySearchBound(set, v, k);

        if (set[k] > 2 * set[lower]) {
            res += map[lower];
        }

        for (let i = 0; i < lower; i++) {
            res += map[i];
        }

        return res;
    }

    function binarySearchBound (arr, target, idx) {
        if (searchCache[idx] !== undefined) return searchCache[idx];

        let low = 0;
        let high = arr.length - 1;
        let mid = 0;

        while (low <= high) {
            mid = (low + high) >> 1;
            if (arr[mid] === target) {
                searchCache[idx] = mid;
                return mid;
            }
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }

        searchCache[idx] = mid;
        return mid;
    }

    return res;
};
