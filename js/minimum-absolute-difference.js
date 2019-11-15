/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity;
    let res = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < min) {
            res = [[arr[i - 1], arr[i]]];
            min = diff;
        } else if (diff === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};