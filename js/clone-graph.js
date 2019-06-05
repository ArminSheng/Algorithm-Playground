/**
 * Definition for undirected graph.
 */
// function Node(val, neighbors) {
//     this.val = val;
//     this.neighbors = neighbors;
// };



/**
 * @param {UndirectedGraphNode} graph
 * @param {{}UndirectedGraphNode} map
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph, map = {}) {
    if (!graph) return graph;

    const v = new Node(graph.val, []);
    map[v.val] = v;

    for (let w of graph.neighbors) {
        if (map[w.val]) {
            v.neighbors.push(map[w.val]);
        } else {
            v.neighbors.push(cloneGraph(w, map));
        }
    }

    return v;
}

var cloneGraph1 = function(graph) {
    if (!graph) return graph;

    const map = {};

    function dfs (g) {
        const v = new Node(g.val, []);
        map[v.val] = v;

        for (let w of g.neighbors) {
            if (map[w.val]) {
                v.neighbors.push(map[w.val]);
            } else {
                v.neighbors.push(dfs(w));
            }
        }

        return v;
    }

    return dfs(graph);
};