/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) return;

    const limitI = board.length;
    const limitJ = board[0].length;
    const marked = new Array(limitI);

    for (let i = 0; i < limitI; i++) {
        marked[i] = [];
    }

    for (let i = 0; i < limitI; i++) {
        for (let j = 0; j < limitJ; j++) {
            if (i === 0 || j === 0 || i === limitI - 1 || j === limitJ - 1) {
                if (board[i][j] === 'O') {
                    if (!marked[i][j]) {
                        bfs(i, j, board, marked, limitI, limitJ);
                    }
                }
            }
        }
    }

    for (let i = 0; i < limitI; i++) {
        for (let j = 0; j < limitJ; j++) {
            if (board[i][j] === 'O' && !marked[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
};

function bfs (i, j, board, marked, limitI, limitJ) {
    if (i < 0 || j < 0 || i >= limitI || j >= limitJ || board[i][j] === 'X' || marked[i][j]) return;

    marked[i][j] = true;
    bfs(i - 1, j, board, marked, limitI, limitJ);
    bfs(i + 1, j, board, marked, limitI, limitJ);
    bfs(i, j - 1, board, marked, limitI, limitJ);
    bfs(i, j + 1, board, marked, limitI, limitJ);
}