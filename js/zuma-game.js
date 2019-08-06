/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
    const map = {};
    for (let c of hand) {
        if (map[c]) map[c]++;
        else map[c] = 1;
    }

    let res = Infinity;

    bTrack(board, 0, map);
    function bTrack (board, count, map) {
        board = removeRepeatedStr(board);

        if (!board) {
            if (count < res) {
                res = count
            }
            return;
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i] === board[i - 1]) continue;
            if (map[board[i]]) {
                map[board[i]]--;

                bTrack(board.slice(0, i) + board[i] + board.slice(i), count + 1, map);

                map[board[i]]++;
            }
        }
    }

    return res === Infinity ? -1 : res;
};


function removeRepeatedStr (s) {
    let _s;
    while (s && s !== _s) {
        _s = s;
        s = s.replace(/(\w)\1{2,}/, '');
    }

    return s;
}