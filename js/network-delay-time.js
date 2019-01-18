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
                    queue.push(to);
                }
            }
        }
    }

    function dijkstra(v) {
        const queue = [v];
        
        while (queue.length) {
            v = queue.shift();
            relax(v, queue);
        }
    }

    dijkstra(K);
    res = Math.max.apply(null, distTo);

    return res === Infinity ? -1 : res;
};

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

        while (p > 0 && qp[pq[k]] < qp[pq[p]]) {
            this.exch(k, p);
            k = p;
            p = p >> 1;
        }
    }
    
    sink (k) {
        const {pq, qp, N} = this;
        let c = k * 2;
        console.log(k,c,pq[k],pq[c], qp[pq[k]],qp[pq[c]]);
        while (c <= N && qp[pq[k]] > qp[pq[c]]) {
            if (k + 1 <= N && qp[pq[k]] > qp[pq[c + 1]]) c += 1;
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
        const m = this.pq[1];
        delete this.pq[1];
        delete this.qp[m];

        this.exch(this.N, 1)
        this.N--;
        this.sink(1);

        return m;
    }
}

pq = new IndexPriorityQueue();
pq.insert('a', 1);
pq.insert('d', 4);
pq.insert('b', 2);
pq.insert('c', 3);
pq.insert('e', 5);