/**
 * 
 * @param {number} arr 
 * O(nlogn)
 */
function quickSort (arr) {
    if (arr.length <= 1) return arr;

    const pivotIdx = arr.length >> 1;
    const pivot = arr[pivotIdx];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIdx) continue;
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;