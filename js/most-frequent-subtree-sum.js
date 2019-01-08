/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    function dfs (root) {
        if (!root) return 0;

        const sumL = dfs(root.left);
        const sumR = dfs(root.right);
        const sum = sumL + sumR + root.val;
        
        table[sum] = table[sum] || 0;
        table[sum]++;

        const n = table[sum];
        map[n] = map[n] || [];
        map[n].push(sum);

        return sum;
    }

    const table = {};
    const map = [];
    dfs(root);

    return map[map.length - 1] || [];
};