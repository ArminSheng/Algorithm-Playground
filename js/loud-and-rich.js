/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const len = quiet.length;
    const ans = Array(len).fill(0).map((_, i) => i);
    const g = Array(len).fill(0).map(_ => []);
    const visited = Array(len).fill(false);

    for (let r of richer) {
        g[r[1]].push(r[0]);
    }

    function dfs (g, i, visited) {
        if (visited[i]) return ans[i];

        visited[i] = true;

        for (let w of g[i]) {
            const res = dfs(g, w, visited);

            if (quiet[res] < quiet[ans[i]]) {
                ans[i] = res;
            }
        }

        return ans[i];
    }

    for (let i = len - 1; i > -1; i--) {
        if (!visited[i]) {
            dfs(g, i, visited);
        }
    }

    return ans;
};