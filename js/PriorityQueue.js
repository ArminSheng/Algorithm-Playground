/**
 * 索引优先队列
 */
class IndexPriorityQueue {
    constructor () {
        this.pq = [];
        this.qp = {};
        this.N = 0;
    }

    insert (key, priority) {
        const pq = this.pq;
        const qp = this.qp;
        pq[++this.N] = key;
        qp[key] = priority;

        this.swim(this.N);
    }

    swim (k) {
        const {pq, qp} = this;
        let p = k >> 1;
        console.log(k,p,pq[k],pq[p], qp[pq[k]],qp[pq[p]]);

        while (p > 0 && qp[pq[k]] < qp[pq[p]]) {
            this.exch(k, p);
            k = p;
            p = p >> 1;
        }
    }
    
    sink (k) {
        const {pq, qp, N} = this;
        let c = k * 2;

        // if (c + 1 <= N && qp[pq[k]] > qp[pq[c + 1]]) c += 1;
        while (c <= N && qp[pq[k]] > qp[pq[c]]) {
            if (c + 1 <= N && qp[pq[c]] > qp[pq[c + 1]]) c += 1;
            this.exch(k, c);
            k = c;
            c = 2 * k;
        }
    }

    exch (i, j) {
        const pq = this.pq;
        [pq[i], pq[j]] = [pq[j], pq[i]];
    }

    delMin () {
        if (!this.N < 1) return null;

        const m = this.pq[1];
        delete this.pq[1];
        delete this.qp[m];

        this.exch(this.N, 1)
        this.N--;
        this.sink(1);

        return m;
    }
}
