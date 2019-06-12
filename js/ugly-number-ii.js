/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    const res = [1];

    while (res.length < n) {
        const v2 = res[p2] * 2;
        const v3 = res[p3] * 3;
        const v5 = res[p5] * 5;
        const min = Math.min(v2, v3, v5)
        res.push(min);

        if (v2 === min) p2++;
        if (v3 === min) p3++;
        if (v5 === min) p5++;
    }

    return res[n - 1];
}

var nthUglyNumber1 = function(n, res = [0, 1]) {
    if (!n) return n;

    let i = 1;
    const pq = new IndexPriorityQueue();

    while (i < n) {
        const v2 = res[i] * 2;
        const v3 = res[i] * 3;
        const v5 = res[i] * 5;
        pq.insert(v2, v2);
        pq.insert(v3, v3);
        pq.insert(v5, v5);

        i++;
        res.push(pq.delMin());
    }

    return res[n];
};

/**
 * 索引优先队列
 */
class IndexPriorityQueue {
    constructor () {
        this.pq = [];
        this.keys = {};
        this.N = 0;
    }

    insert (key, priority) {
        const {pq, keys} = this;
        const idx = this.includes(key);

        if (idx) {
            this.change(key, priority, idx);
            return;
        }

        pq[++this.N] = key;
        keys[key] = priority;

        this.swim(this.N);
    }

    swim (k) {
        const {pq, keys} = this;
        let p = k >> 1;

        while (p > 0 && this.less(k, p)) {
            this.exch(k, p);
            k = p;
            p = p >> 1;
        }
    }

    sink (k) {
        const {pq, keys, N} = this;
        let c = k * 2;

        while (c <= N && this.less(c, k)) {
            if (c + 1 <= N && this.less(c + 1, c)) c++;
            this.exch(k, c);
            k = c;
            c = 2 * k;
        }
    }

    less (i, j) {
        const {keys, pq} = this;
        return keys[pq[i]] < keys[pq[j]];
    }

    exch (i, j) {
        const pq = this.pq;
        [pq[i], pq[j]] = [pq[j], pq[i]];
    }

    includes (key) {
        const idx = this.pq.indexOf(key);
        return idx > -1 ? idx : 0;
    }

    change (key, priority, index) {
        const {pq, keys} = this;

        keys[key] = priority;
        this.swim(index);
        this.sink(index);
    }

    delMin () {
        if (this.N < 1) return null;

        const m = this.pq[1];
        delete this.pq[1];
        delete this.keys[m];

        this.exch(this.N, 1)
        this.N--;
        this.sink(1);

        return m;
    }
}
