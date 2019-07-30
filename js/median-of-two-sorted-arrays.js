/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

}

var findMedianSortedArrays1 = function(nums1, nums2) {
    const arr = nums1.concat(nums2);
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        return arr[mid];
    }
};