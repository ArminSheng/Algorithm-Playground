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