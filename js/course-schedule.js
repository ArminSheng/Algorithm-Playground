/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const ADJ = Array(numCourses).fill(0).map(_ => []);
    const marked = [];
    const onStack = [];
    let hasCycle = false;

    for (let e of prerequisites) {
        ADJ[e[0]].push(e[1]);
    }

    function dfs(v) {
        marked[v] = true;
        onStack[v] = true;

        for (let w of ADJ[v]) {
            if (hasCycle) {
                return;
            } else if (!marked[w]) {
                dfs(w);
            } else if (onStack[w]) {
                hasCycle = true;
                return;
            }

        }

        onStack[v] = false;
    }

    let i = -1;
    while (++i < numCourses) {
        if (hasCycle) return false;
        if(!marked[i]) dfs(i);
    }

    return true; 
};