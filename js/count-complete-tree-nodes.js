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
var countNodes = function(root) {
    function dfs(root, l) {
        if (!root) {
            lose += 1;
            return;
        }

        level = l;
        dfs(root.left, l + 1);
        dfs(root.right, l + 1);
    }

    let level = 0;
    let lose = 0;
    let sum = 1;

    dfs(root, 0);
    lose = Math.pow(2, level + 1) - lose;
    while (level > 0) {
        sum += Math.pow(2, level);
        level--;
    }

    sum -= lose;
    return sum;
};

var countNodes2 = function(root) {
    if(root === null) {
        return 0;
    }

    var l = root.left,
        r = root.right,
        lCount = 1,
        rCount = 1;

    while(l) {
        lCount++;
        l = l.left
    }

    while(r) {
        rCount++;
        r = r.right;
    }

    if(lCount === rCount) {
        return Math.pow(2,lCount) - 1;
    }
    
    return countNodes(root.left) + countNodes(root.right) + 1;
};