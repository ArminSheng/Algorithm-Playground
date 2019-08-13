/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function maxSumSubmatrix (matrix, K) {
    let max = -Infinity;
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < n; i++) {
        const rowSum = Array(m).fill(0);
        for (let j = i; j < n; j++) {

            for (let k = 0; k < m; k++) {
                rowSum[k] += matrix[k][j];
                let sum = 0;
                const arr = [0];

                for (let r = 0; r < m; r++) {
                    sum += rowSum[r];
                    const idx = upperBound(arr, sum - K);

                    if (idx > -1) {
                        if (sum - arr[idx] === K) return K;
                        else max = Math.max(max, sum - arr[idx]);
                    }

                    arr.push(sum);
                    arr.sort((a, b) => a - b);
                }

            }
        }
    }

    return max;
}

// const binarySearchLowerBound = function (arr, target) {
//     let low = 0;
//     let high = arr.length;
//     let mid = 0;

//     while (low < high) {
//         mid = (low + high) >> 1;
//         if (arr[mid] > target) low = mid + 1;
//         else high = mid;
//     }

//     return low;
// }

function upperBound(a, key){
    let s = 0, e = a.length - 1;
    let ans = -1;

    while(s <= e) {
        let mid = (s + e) >> 1;

        if(a[mid] == key){
            ans = mid;
            s = mid+1;
        }
        else if(a[mid] > key){
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }
    }

    return ans;
}