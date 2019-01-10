/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const graph = {};
    const visited = {};

    for (let e of edges) {
        graph[e[0]] = graph[e[0]] || [];
        graph[e[0]].push(e[1]);

        graph[e[1]] = graph[e[1]] || [];
        graph[e[1]].push(e[0]);
    }
    
    for (let i = edges.length - 1; i > 0; i--) {
        const v1 = edges[i][0];
        const v2 = edges[i][1];
        const adj1 = graph[v1];
        const adj2 = graph[v2];

        deleteInArr(adj1, v2);
        deleteInArr(adj2, v1);

        if (isConnect(v1, v2)) {
            return edges[i];
        }

        adj1.push(v2);
        adj2.push(v1);
    }

    function isConnect(i, j) {
        let flag = false;
        
        function dfs(i, j) {
            visited[i] = true;

            for (let v of graph[i]) {
                if (visited[v]) continue;
                if (v === j) {
                    visited[i] = false;
                    flag = true;
                } else dfs(v, j);
            }
            visited[i] = false;
        }

        dfs(i, j);
        return flag;
    }
};


function deleteInArr (arr, ele) {
    const idx = arr.lastIndexOf(ele);
    arr.splice(idx, 1);
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection2 = function(edges) {
    const UF = [];
    let r1, r2;

    for (let i of edges) {
        r1 = findUnion(i[0]);
        r2 = findUnion(i[1]);

        if (r1 === r2) {
            return i;
        }

        UF[r2] = r1;
    }

    function findUnion (v) {
        if (!UF[v]) UF[v] = v;
        while (UF[v] !== v) {
            v = UF[v];
        }
        return v;
    }
};