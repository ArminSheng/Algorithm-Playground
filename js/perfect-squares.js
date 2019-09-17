var numSquares = function(n) {
    const arr = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        const sqrt = Math.floor(Math.sqrt(i));
        if (sqrt * sqrt === i) {
            arr[i] = 1;
            continue;
        }

        const ans = [];
        for (let j = 1; j < i; j++) {
            ans.push(arr[j] + arr[i - j]);
        }

        arr[i] = Math.min(...ans);
    }

    return arr[n];
}

/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
    const arr = [];
    const map = {};

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        arr[i - 1] = i * i;
    }
    const queue = [{lvl: 0, sum: n}];

    while (queue.length) {
        node = queue.pop();
        if (node.sum === 0) return node.lvl;

        for (let w of getNeighbors(arr, node.sum)) {
            const _node = {lvl: node.lvl + 1, sum: node.sum - w};
            if (_node.sum === 0) return _node.lvl;

            if (!map[_node.sum] && _node.lvl < 4) {
                queue.unshift(_node);
            }
            map[_node.sum] = true;

        }
    }
};

function getNeighbors(arr, n) {
    n = Math.floor(Math.sqrt(n));
    return arr.slice(0, n);
}