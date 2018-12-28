/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function(root) {
    let pre;
    let n1;
    let n2;


    function dfs(root) {
        if (!root) return;
        dfs(root.left);

        if (pre && pre.val > root.val) {
            if (!n1) {
                n1 = pre;
            }
            n2 = root;
        }
        pre = root;
        dfs(root.right);
    }

    dfs(root);

    if (n1 && n2) {
        [n1.val, n2.val] = [n2.val, n1.val]
    }
};

var recoverTree2 = function(root) {
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        arr.push(root);
        dfs(root.right);
    }

    const arr = [];
    dfs(root);

    const _arr = arr.slice(0);
    _arr.sort((a, b) => a.val - b.val);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].val !== _arr[i].val) {
            [arr[i].val, _arr[i].val] = [_arr[i].val, arr[i].val];
            return;
        }
    }
};