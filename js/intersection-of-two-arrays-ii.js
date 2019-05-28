/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let i = 0;
    let j = 0;
    const res = [];

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    while (i < len1 && j < len2) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return res;
};