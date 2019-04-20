/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    const G = [];
    for (let e of edges) {
        G[e[0]] = G[e[0]] || [];
        G[e[0]].push(e[1]);
    }

    let res = true;

    function dfs (v, map) {
        if (map[v] || !res) {
            res = false;
            return;
        };

        if (!G[v]) {
            if (v !== destination) {
                res = false;
            }
            return;
        }

        map[v] = true;
        for (let w of G[v]) {
            dfs(w, map);
        }
        map[v] = false;
    }

    dfs(source, []);
    return res;
};