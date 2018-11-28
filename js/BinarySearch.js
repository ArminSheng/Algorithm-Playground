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
			return mid;
		}
	}

	return -1;
}

/*
 * Recursive
*/
function recursiveBinarySearch (arr, target) {
	function innerRecursive (arr, target, low, high) {
		if (low > high) {
			return -1;
		}

		let mid = (low + high) >> 1;

		if (arr[mid] > target) {
			return innerRecursive(arr, target, low, mid - 1);
		} else if (arr[mid] < target) {
			return innerRecursive(arr, target, mid + 1, high);
		} else {
			return mid;
		}
	}

	return innerRecursive(arr, target, 0, arr.length - 1);
}

/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
const searchMatrix = function (matrix, target) {
	let colum = matrix.length;
	let row = matrix[0].length;
	if (target === undefined || target < matrix[0][0] || target > matrix[colum - 1][row - 1]) {
		return false;
	}

	let low = 0;
	let high = colum * row - 1;

	while (low <= high) {
		let mid = (low + high) >> 1;
		let midVal = matrix[Math.floor(mid / row)][mid % row];
		if (midVal > target) {
			high = mid - 1;
		} else if (midVal < target) {
			low = mid + 1;
		} else if (midVal === target) {
			return {colum, row, mid};
		}
	}

	return false;
}

export default binarySearch;