/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    function dfs (v) {
        marked[v] = true;

        if (color[v] === undefined) color[v] = true;
        for (let w of graph[v]) {
            if (color[v] === color[w]) {
                res = false;
                return;
            }

            color[w] = !color[v];
            if (!marked[w]) {
                dfs(w);
            }
        }
    }

    const marked = [];
    const color = [];
    let res = true;

    for (let i = 0; i < graph.length; i++) {
        if (!res) return res;
        if (graph[i] && !marked[i]) dfs(i);
    }

    return res;
};