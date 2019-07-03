/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    const res = [];
    const win = new Window();

    for (let i = 0; i < k; i++) {
        win.push(nums[i]);
    }

    res.push(win.median);

    for (let i = k; i < nums.length; i++) {
        win.delete(nums[i - k]);
        win.push(nums[i]);
        res.push(win.median);
    }

    return res;
};

class Window {
    arr = [];

    push (n) {
        const idx = this.binarySearchUpperBound(this.arr, n);
        this.arr.splice(idx, 0, n);
    }

    binarySearchUpperBound (arr, target) {
        if (target >= arr[arr.length - 1]) return arr.length;
        if (target <= arr[0]) return 0;

        let low = 0;
        let high = arr.length - 1;
        let mid = 0;

        while (low < high) {
            mid = (low + high) >> 1;
            if (arr[mid] < target) low = mid + 1;
            else high = mid;
        }

        return high;
    }

    delete (n) {
        const idx = this.arr.findIndex(i => i === n);
        this.arr.splice(idx, 1);
    }

    get median () {
        const len = this.arr.length;
        const {arr} = this;

        if (len % 2 === 0) {
            return (arr[len >> 1] + arr[(len >> 1) - 1]) / 2;
        } else {
            return arr[len >> 1];
        }
    }
}