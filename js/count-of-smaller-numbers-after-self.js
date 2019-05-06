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
