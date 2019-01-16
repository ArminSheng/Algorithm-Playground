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
        G[v0].push({key: v1, val: t[2]});
    }

    const marked = [];
    let total = 0;
    let n = 0;

    function dfs(v, t) {
        marked[v] = true;
        n++;
        for (let w of G[v]) {
            let key = w.key;
            let _t = w.val;
            if (!marked[key]) {
                // t += _t;
                total = Math.max(total, t + _t);
                dfs(key, t + _t);
            }
        }
    }

    dfs(K, 0);
    if (n !== N) {
        return -1;
    }

    return total;
};