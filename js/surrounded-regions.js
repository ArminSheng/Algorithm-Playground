/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const marked = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            marked[i] = marked[i] || [];
            if (i === 0 || j === 0 || i === board.length - 1 || j === board[i].length - 1) {
                if (board[i][j] === 'O') {
                    if (!marked[i][j]) {
                        bfs(i, j, board, marked);
                    }
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O' && !marked[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
};

function bfs (i, j, board, marked) {
    // console.log(board[i], i, j, board[i][j])
    marked[i] = marked[i] || [];

    if (!board[i] || !board[i][j] || board[i][j] === 'X' || marked[i][j]) return;
    marked[i][j] = true;

    bfs(i - 1, j, board, marked);
    bfs(i + 1, j, board, marked);
    bfs(i, j - 1, board, marked);
    bfs(i, j + 1, board, marked);
}