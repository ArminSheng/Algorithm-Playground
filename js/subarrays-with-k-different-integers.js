/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    const len = A.length;
    const map1 = Array(len + 1).fill(0);
    const map2 = Array(len + 1).fill(0);
    let [res, rt, l1, l2, dist1, dist2] = [0, -1, 0, 0, 0, 0];

    while (++rt < len) {
        if (!map1[A[rt]]) {
            dist1++;
        }

        if (!map2[A[rt]]) {
            dist2++;
        }

        map1[A[rt]]++;
        map2[A[rt]]++;

        while (dist1 > K) {
            if (map1[A[l1]] === 1) {
                dist1--;
            }

            map1[A[l1++]]--;
        }

        while (dist2 >= K) {
            if (map2[A[l2]] === 1) {
                dist2--;
            }

            map2[A[l2++]]--;
        }

        res += l2 - l1;
    }

    return res;
};