/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    let [res, max, last] = [1, 1, A[1] < A[0]];

    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i - 1]) {
            res = 1;
            last = A[i + 1] > A[i];
        }

        else if (A[i] > A[i - 1] !== last) {
            res++;
            last = !last;
            if (res > max) max = res;
        } else {
            res = 2;
            last = A[i] > A[i - 1];
        }
    }

    return max;
};