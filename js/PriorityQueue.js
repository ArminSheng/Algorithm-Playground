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
