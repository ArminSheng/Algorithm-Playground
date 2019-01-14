/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (!graph) return graph;

    function dfs (g, _g) {
        marked[_g.label] = true;
        for (let w of _g.neighbors) {
            let copy = new UndirectedGraphNode(w.label);
            g.neighbors.push(copy);
            if (!marked[w.label]) dfs(copy, w);
        }
    }

    let g = new UndirectedGraphNode(graph.label);
    const marked = [];
    dfs(g, graph);

    return g;
};