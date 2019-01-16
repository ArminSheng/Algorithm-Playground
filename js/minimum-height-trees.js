/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (edges.length >= n) return [];
    if (n === 1) return [0];

    let adj = [];
    for (let e of edges) {
        e0 = e[0];
        e1 = e[1];

        if (adj[e0]) {
            adj[e0].push(e1);
        } else {
            adj[e0] = [e1];
        }

        if (adj[e1]) {
            adj[e1].push(e0);
        } else {
            adj[e1] = [e0];
        }
    }

    let leafs;
    while (n > 2) {
        leafs = [];
        adj.forEach((e, i) => {
            if (e.length === 1) {
                delete adj[i];
                leafs.push(i);
                n--;
            }
        });

        leafs.forEach(i => {
            adj.forEach(v => {
                if (!v) return;
                let idx = v.indexOf(i);
                if (idx > -1) v.splice(idx, 1);
            })
        });
    }

    return Object.keys(adj);
};