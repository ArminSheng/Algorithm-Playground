/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    const G = [];
    for (let i = 0; i <= N; i++) {
        G[i] = [];
    }

    for (let t of times) {
        let v0 = t[0];
        let v1 = t[1];
        G[v0].push({to: v1, weight: t[2]});
    }

    let res = 0;
    const distTo = Array(N + 1).fill(Infinity);
    distTo[0] = 0;
    distTo[K] = 0;

    function relax(v, queue) {
        for (let edge of G[v]) {
            let to = edge.to;
            let dis = distTo[v] + edge.weight;
            
            if (distTo[to] > dis) {
                distTo[to] = dis;
                if (!queue.includes(to)) {
                    queue.insert(to, dis);
                } else {
                    queue.change(to, dis)
                }
            }
        }
    }

    function dijkstra(v) {
        const queue = new IndexPriorityQueue();
        while (v) {
            relax(v, queue);
            v = queue.delMin();
        }
    }

    dijkstra(K);
    res = Math.max.apply(null, distTo);

    return res === Infinity ? -1 : res;
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

    isEmpty () {
        return this.N > 0;
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
