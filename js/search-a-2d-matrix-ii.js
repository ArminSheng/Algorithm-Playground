/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const hei = matrix.length;
    if (!hei) return false;

    let x = matrix[0].length - 1, y = 0;

    while (x >= 0 && y < hei) {
        if (matrix[y][x] > target) {
            x--;
        } else if (matrix[y][x] < target) {
            y++;
        } else {
            return true;
        }
    }

    return false;
}

var searchMatrix2 = function(matrix, target) {
    for (let arr of matrix) {
        if (target < arr[0]) break;
        if (binarySearch(arr, target)) return true;
    }

    return false;
};

function binarySearch (arr, target) {
    let lo, hi, mid;
    lo = 0;
    hi = arr.length - 1;
    
    while (lo <= hi) {
        mid = lo + hi >> 1;
        if (arr[mid] > target) {
            hi = mid - 1;
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            return true;
        }
    }

    return false;
}