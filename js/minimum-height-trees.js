/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (edges.length >= n) return [];

    const adj = [];
    const max = 0;
    const res = [];
    const marked = [];

    for (let e of edges) {
        e0 = e[0];
        e1 = e[1];

        adj[e0] ? adj[e0].push(e1) : (adj[e0] = []);
        adj[e1] ? adj[e1].push(e1) : (adj[e1] = []);
    }

    function dfs(v, lvl, path) {
        path.push(v);
        marked[v] = true;

        // if (lvl > max) {
        if (marked.length === n) {
            max = lvl;
            res = [];
            mid = lvl % 2;

            if (mid === 0) {
                res.push(path[lvl / 2]);
                res.push(path[lvl / 2 + 1]);
            } else {
                res.push(path[lvl >> 1]);
            }
        }

        for (let w of adj[v]) {
            if (!marked[w]) dfs(w, lvl + 1, path);
        }
    }
};