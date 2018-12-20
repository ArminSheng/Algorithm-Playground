class TreeNode {
    constructor (n) {
      this.val = n;
      this.nodes = [];
    }
  
    add (node) {
      this.nodes.push(node);
    }
}
  
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

    function dfs_leaf(root, parent, dp) {
        let node = map[root];
        for (let n of node.nodes) {
            if (n.val === parent) continue;
            
            dp[root][1] += dfs_leaf(n.val, root, dp);
        }

        dp[root][1] += 1;
        return dp[root][1];
    }

    function dfs_root(root) {
        let res = 1;
        function helper (root, dist) {
            if (root.used) return;
            root.used = true;

            res += dist * (root.nodes.length - 1);
            for (let node of root.nodes) {
                helper(node, dist + 1);
            }
            root.used = false;
        }
        helper(root, 1);
        return res;
    }

    function dfs_dp(root, parent, dp) {
        const leafs = dp[root][1];
        const node = map[root];

        if (!ans[root]) {
            dp[root][0] = ans[parent] - 2 * leafs + N;
            ans[root] = dp[root][0]; 
        }
        for (let n of node.nodes) {
            if (n.val === parent) continue;
            dfs_dp(n.val, root, dp);
        }
    }

    dfs_leaf(0, -1, dp);
    ans[0] = dp[0][0] = dfs_root(map[0]);
    dfs_dp(0, 0, dp);
    
    return ans;
};
  
  