/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {
    const G = Array(numCourses).fill(0).map(_ => []);
    const marked = [];
    let hasCycle = false;
    const res = new Set();

    for (let e of prerequisites) {
        G[e[0]].push(e[1]);
    }

    function dfs(v) {
        marked[v] = true;

        for (let w of G[v]) {
            if (hasCycle) {
                return;
            } else if (!marked[w]) {
                dfs(w);
            } else if (marked[w]) {
                hasCycle = true;
                return;
            }
        }
        res.add(v);
        marked[v] = false;
    }

    let i = -1;
    while (++i < numCourses) {
        if (hasCycle) return [];
        if(!marked[i]) dfs(i);
    }

    return Array.from(res);
};