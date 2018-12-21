  
  /**
   * @param {number} N
   * @param {number[][]} edges
   * @return {number[]}
   */
  var sumOfDistancesInTree = function(N, edges) {
    if (!N) return [];
    if (edges.length < 1) return [0];

    const ans = [];
    const map = {};
    const dp = [];

    let i = 0;
    let n;
    while (i < N) {
        dp[i] = [0, 0];
        if (i >= N - 1) {
            i++;
            continue;
        }
        
        n = edges[i];
        let a = n[0];
        let b = n[1];
        map[a] = map[a] || {val: a, nodes: []};
        map[b] = map[b] || {val: b, nodes: []};
        map[a].nodes.push(map[b]);
        map[b].nodes.push(map[a]);
        i++;
    }

    function dfs_dp(root, parent, dp) {
        let node = map[root];
        let sum = 0, node_sum = 1;

        for (let n of node.nodes) {
            if (n.val === parent) continue;
            let res = dfs_dp(n.val, root, dp);
            sum += res.sum + res.node_sum;
            node_sum += res.node_sum;
        }

        dp[root][0] = sum;
        dp[root][1] = node_sum;
        return {sum, node_sum};
    }

    function dfs_ans(node, parent, dp) {
        for (let n of map[node].nodes) {
            let root = n.val;
            if (root === parent) continue;

            const leafs = dp[root][1];
            ans[root] = ans[node] - 2 * leafs + N;
            dfs_ans(root, node, dp);
        }
    }
    
    ans[0] = dfs_dp(0, -1, dp).sum;
    dfs_ans(0, 0, dp);
    
    return ans;
};
  
  