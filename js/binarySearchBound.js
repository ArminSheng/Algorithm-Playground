const binarySearchUpperBound = function (arr, target) {
    let low = 0;
    let high = arr.length;
    let mid = 0;

    while (low < high) {
        mid = (low + high) >> 1;
        if (arr[mid] > target) high = mid;
        else low = mid + 1;
    }

    return low;
}

const binarySearchLowerBound = function (arr, target) {
    let low = 0;
    let high = arr.length;
    let mid = 0;

    while (low < high) {
        mid = (low + high) >> 1;
        if (arr[mid] > target) low = mid + 1;
        else high = mid;
    }

    return low;
}