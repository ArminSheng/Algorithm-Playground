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
var minCameraCover = function(root) {
    function dfs(node, par) {
        if (node !== null) {
            dfs(node.left, node);
            dfs(node.right, node);
            
            if (par === null && !covered.includes(node) ||
            !covered.includes(node.left) ||
            !covered.includes(node.right)) {
                ans++;
                covered.push(node);
                covered.push(par);
                covered.push(node.left);
                covered.push(node.right);
                root.val = 1;
            }

            arr.push(root.val);
        }
    }
    
    let ans = 0;
    const covered = [];
    const arr = [];
    
    dfs(root, null);
    console.log(arr, covered, ans);
    return ans;
}

var minCameraCover2 = function(root) {
    // 0: Strict ST; All nodes below this are covered, but not this one
    // 1: Normal ST; All nodes below and incl this are covered - no camera
    // 2: Placed camera; All nodes below this are covered, plus camera here
    function solve(node) {
        if (node == null)
        return [0, 0, 99999];
        
        const L = solve(node.left);
        const R = solve(node.right);
        const mL12 = Math.min(L[1], L[2]);
        const mR12 = Math.min(R[1], R[2]);
        
        const d0 = L[1] + R[1];
        const d1 = Math.min(L[2] + mR12, R[2] + mL12);
        const d2 = 1 + Math.min(L[0], mL12) + Math.min(R[0], mR12);
        return [d0, d1, d2];
    }
    const ans = solve(root);
    return Math.min(ans[1], ans[2]);
}

var minCameraCover = function(root) {
    const NOT_MONITORED = 0;
    const MONITORED_NOCAM = 1;
    const MONITORED_WITHCAM = 2;
    let cameras = 0;
	
    
    function dfs(root) {
        if (root == null) return MONITORED_NOCAM;
        const left = dfs(root.left);
        const right = dfs(root.right);
        if (left == MONITORED_NOCAM && right == MONITORED_NOCAM) {
            return NOT_MONITORED;
        } else if (left == NOT_MONITORED || right == NOT_MONITORED) {
            cameras++;
            return MONITORED_WITHCAM;
        } else {
            return MONITORED_NOCAM;
        }
    }
    
    if (root == null) return 0;
    const top = dfs(root);
    return cameras + (top == NOT_MONITORED ? 1 : 0);
}


var minCameraCover3 = function(root) {
    if (root && !root.left && !root.right) return 1;

    function dfs (root) {
        if (!root) return true;

        const leftHasCamera = dfs(root.left);
        const rightHasCamera = dfs(root.right);

        if (leftHasCamera && rightHasCamera) {
            return false;
        } else {
            count++;
            return true;
        }
    }

    let count = 0;
    dfs(root);

    return count;
};