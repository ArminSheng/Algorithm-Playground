/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return [];
    const res = [];
    const len = nums.length;
    const heap = new MaxHeap();

    nums.slice(0, k).forEach(val => heap.insert(val));

    res.push(heap.getMax());

    for (let i = k; i < len; i++) {
        heap.remove(nums[i - k]);
        heap.insert(nums[i]);
        res.push(heap.getMax());
    }

    return res;
};

class MaxHeap {
    constructor () {
        this.arr = [];
        this.p = 0;
    }

    insert (val) {
        this.arr[++this.p] = val;
        this.swim(this.p);
    }

    compare (a, b) {
        return a > b;
    }

    compareByIdx (i1, i2) {
        return this.compare(this.arr[i1], this.arr[i2]);
    }

    find (val) {
        return this.arr.findIndex(i => i === val);
    }

    remove (val) {
        if (!this.p) return null;

        const idx = this.find(val);
        this.arr[idx] = this.arr[this.p];
        this.p--;
        this.sink(idx);
        this.swim(idx);
    }

    swim (idx) {
        const {arr} = this;
        const val = arr[idx];
        let index = idx;
        let pIdx;

        while (index > 0) {
            pIdx = index >> 1;

            if (this.compare(val, arr[pIdx])) {
                arr[index] = arr[pIdx];
                index = pIdx;
            } else break;
        }

        arr[index] = val;
    }

    sink (idx) {
        const {arr, p} = this;
        const val = arr[idx];
        let index = idx;
        let pIdx = index * 2;


        while (pIdx <= p) {
            if (this.compare(arr[pIdx], val) || this.compare(arr[pIdx + 1], val)) {
                if ((pIdx + 1 <= this.p) && this.compareByIdx(pIdx + 1, pIdx)) pIdx++;

                arr[index] = arr[pIdx];
                index = pIdx;
            } else break;

            pIdx = index * 2;
        }


        arr[index] = val;
    }

    getMax () {
        return this.arr[1];
    }

    delMax () {
        if (!this.p) return null;

        const res = this.arr[1];
        delete this.arr[1];
        this.arr[1] = this.arr[this.p];
        this.p--;
        this.sink(1);

        return res;
    }
}