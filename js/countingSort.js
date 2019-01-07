/**
 * 
 * @param {number} arr 
 * @return arr
 * O(N + K) k = max number in arr
 */
function countingSort (arr) {
    const counting = [];

    for (let i of arr) {
        counting[i] = counting[i] || 0;
        counting[i]++;
    }

    arr = [];
    for (let i = 0; i < counting.length; i++) {
        while (counting[i]) {
            arr.push(i);
            counting[i]--;
        }
    }

    return arr;
}