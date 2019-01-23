/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const G = {};
    const map = {};

    let v1, v2, weight;
    for (let i = 0; i < equations.length; i++) {
        v1 = equations[i][0];
        v2 = equations[i][1];
        weight = values[i];

        G[v1] = G[v1] || [];
        G[v2] = G[v2] || [];
        G[v1].push({to: v2, w: weight});
        G[v2].push({to: v1, w: 1 / weight});
        map[v1 + '#' + v2] = weight;
        map[v2 + '#' + v1] = 1 / weight;
    }

    function dfs(from, cur, acc, marked) {
        if (!G[cur]) return;
        marked[cur] = true;
        let t, res;

        for (let edge of G[cur]) {
            t = edge.to;
            if (!marked[t]) {
                res = acc * edge.w;
                map[from + '#' + t] = res;
                map[t + '#' + from] = 1 / res;
                dfs(from, t, res, marked);
            }

        }
    }

    let f, t, ft, tf;
    const res = [];

    for (let q of queries) {
        f = q[0];
        t = q[1];
        ft = f + '#' + t;
        tf = t + '#' + f;

        if (!G[f] || !G[t]) {
            res.push(-1);
        } else if (f === t) {
            res.push(1);
        } else if (map[ft]) {
            res.push(map[ft]);    
        } else if (map[tf]) {
            res.push(1 / map[tf]);
        } else {
            dfs(f, f, 1, {});
            res.push(map[ft] || -1);
        }
    }

    return res;
};