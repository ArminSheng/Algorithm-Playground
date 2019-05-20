const mergeSort = function (arr) {
    const len = arr.length;
    if (len < 2) return arr;

    const mid = len >> 1;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const merge = function (lt, ri) {
    const tmp = [];
    let i = 0;
    let j = 0;

    while (i < lt.length && j < ri.length) {
        if (lt[i] < ri[j]) {
            tmp.push(lt[i]);
            i++;
        } else {
            tmp.push(ri[j]);
            j++;
        }
    }

    if (i < lt.length) {
        return tmp.concat(lt.slice(i));
    } else if (j < ri.length) {
        return tmp.concat(ri.slice(j));
    }
}