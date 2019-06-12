/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap();
    stones.forEach(s => heap.insert(s));

    let m1;
    let m2;
    while (heap.p > 0) {
        if (heap.p === 1) return heap.delMax();

        m1 = heap.delMax();
        m2 = heap.delMax();
        if (m1 - m2) {
            heap.insert(m1 - m2);
        }
    }

    return 0;
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

    // swim (k) {
    //     let p = k >> 1;

    //     while (p > 0 && this.compareByIdx(k, p)) {
    //         this.exch(k, p);
    //         k = p;
    //         p = p >> 1;
    //     }
    // }

    // sink (k) {
    //     let c = k * 2;
    //     while (c <= p && this.compareByIdx(c, k) || this.compareByIdx(c + 1, k)) {
        //         if (c + 1 <= p && this.compareByIdx(c + 1, c)) c++;
        //         this.exch(k, c);
        //         k = c;
        //         c = 2 * k;
        //     }
        // }

    // exch (i, j) {
    //     const pq = this.arr;
    //     [pq[i], pq[j]] = [pq[j], pq[i]];
    // }

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


    delMax () {
        if (!this.p) return null;

        const max = this.arr[1];
        delete this.arr[1];
        this.arr[1] = this.arr[this.p];
        // this.exch(this.p, 1)
        this.p--;
        this.sink(1);

        return max;
    }
}