/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

//  Greedy
var findOrder = function(numCourses, prerequisites) {
    const inDegrees = Array(numCourses).fill(0);
    const res = [];
    const G = Array(numCourses).fill(0).map(_ => []);

    for (let e of prerequisites) {
        G[e[1]].push(e[0]);
        inDegrees[e[0]]++;
    }

    while (res.length < numCourses) {
        let hasCycle = true;

        for (let i = 0; i < numCourses; i++) {
            if (inDegrees[i] === 0) {
                hasCycle = false;

                // 入度设为-1代表该节点已输出至result
                inDegrees[i] = -1;
                res.push(i);

                for (let w of G[i]) {
                    inDegrees[w]--;
                }
            }
        }

        if (hasCycle) return [];
    }

    return res;
}

var findOrder1 = function(numCourses, prerequisites) {
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