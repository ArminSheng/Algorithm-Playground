/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const len = nums.length;
    const counts = Array(len).fill(0);
    const arr = nums.slice();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        const idx = binarySearch(arr, nums[i]);

        counts[i] = idx;
        arr.splice(idx, 1);
    }

    return counts;
};

function binarySearch (arr, target) {
	let low = 0;
	let high = arr.length - 1;
	let mid = 0;

	while (low <= high) {
		mid = (low + high) >> 1;

		if (arr[mid] > target) {
			high = mid - 1;
		} else if (arr[mid] < target) {
			low = mid + 1;
		} else {
            while (arr[mid - 1] === arr[mid]) {
                mid--;
            }
			return mid;
		}
	}

	return -1;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller1 = function(nums) {
    const len = nums.length;
    const res = Array(len).fill(0);

    const root = new Node(nums[len - 1], len - 1);

    for (let i = len - 2; i > -1; i--) {
        const node = new Node(nums[i], i);
        insert(root, node, res);
    }

    return res;
};

function insert (root, node, res) {
    if (node.val <= root.val) {
        root.count++;
        if (!root.left) root.left = node;
        else insert(root.left, node, res);
    } else {
        res[node.index] += root.count + 1;
        if (!root.right) {
            root.right = node;
            // res[node.index] = root.count + 1;
        }
        else insert(root.right, node, res);
    }
}

function Node (val, index) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 0;
    this.index = index;
}

/** third method
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller2 = function(nums) {
    const len = nums.length;
    const res = [];
    const sorted = nums.slice().sort((a, b) => a - b);
    const hash = {};
    const map = Array(len).fill(0);;

    for (let i = 0; i < len; i++) {
        hash[sorted[i]] = i;
    }

    for (let i = len - 1; i > - 1; i--) {
        const j = hash[nums[i]];
        map[j]++;
        res[i] = sum(j, map);
    }

    return res;
};

function sum (k, map) {
    let res = 0;

    for (let i = 0; i < k; i++) {
        res += map[i];
    }

    return res;
}
