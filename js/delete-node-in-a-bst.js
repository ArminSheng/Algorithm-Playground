/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let r = root;
    function h(root, parent, key) {
        if (!root) return;
        if (root.val > key) {
            h(root.left, root, key);
        } else if (root.val < key) {
            h(root.right, root, key);
        } else if (root.val === key) {
            if (root === parent) {
                if (!root.left) {
                    r = root.right;
                    return;
                }

                if (!root.right) {
                    r = root.left;
                    return;
                }

                r = root.right;
                insert(r, root.left);
                return;
            }

            let node;
            if (root.left) {
                root.left.right = root.right;   
                node = root.left;
            } else {
                node = root.right;
            }

            if (node && parent) {
                if (parent.val > node.val) {
                    parent.left = node;
                } else {
                    parent.right = node;
                }    
            }
        }    
    }

    function insert(root, node) {
        if(!root.left) root.left = node;
        else insert(root.left, node);
    }

    h(root, root, key);
    return r;
};

// var deleteNode = function(root, key) {
//     const q = [];
//     const dfs_mid = root => {
//         dfs_mid(root.left);
//         q.push(root);
//         dfs_mid(root.right);
//     }

//     dfs_mid(root);

//     let i = 0;
//     while (i < q.length) {
//         if (q[i].val === key) {
//             q[i+1].left = q[i].left;

//             break;
//         }
//         i++;
//     }
// }