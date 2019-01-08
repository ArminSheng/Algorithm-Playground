/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    function dfs (root) {
        if (!root) return {};

        const l = dfs(root.left);
        const r = dfs(root.right);

        if (l.val === root.val && root.val === r.val) {
            const c = l.count + r.count + 1;
            const returnObj = {
                val: root.val, 
                count: Math.max(l.count, r.count) + 1
            };
            max = Math.max(max, c);
            
            return returnObj;
        } else if (l.val === root.val) {
            l.count += 1;
            max = Math.max(max, l.count);
            return l;
        } else if (r.val === root.val) {
            r.count += 1;
            max = Math.max(max, r.count);
            return r;
        } else {
            return {val: root.val, count: 1};
        }
    }

    let max = 1;
    dfs(root);
    return max - 1;
};

var longestUnivaluePath2 = function(root) {
    function dfs(root, val) {
        if (!root) return 0;

        const l = dfs(root.left, root.val);
        const r = dfs(root.right, root.val);
        max = Math.max(max, l + r);

        if (root.val === val) {
            return Math.max(l, r) + 1;
        }

        return 0;
    }

    let max = 0;
    dfs(root, root && root.val);
    return max;
};