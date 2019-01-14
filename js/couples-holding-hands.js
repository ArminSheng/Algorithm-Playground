/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const uf = [];
    const len = row.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        uf[row[i]] = i;
    }
    
    for (let i = 0; i < len - 2; i+=2) {
        let p = row[i] ^ 1;
        let next = row[i + 1];

        if (next === p) {
            continue;
        }

        swap(row, i + 1, uf[p]);
        uf[next] = uf[p];
        count++;
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return count;
};