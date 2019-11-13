/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
    const map = Array(x + 1).fill(0).map(_ => Array(y + 1).fill(0));

    for (let obs of obstacles) {
        if (map[obs[0]]) {
            map[obs[0]][obs[1]] = 1;
        }
    }

    let _x = 0;
    let _y = 0;

    while (true) {
        for (let c of command) {
            if (_x === x && y === _y) return true;

            if (c === 'U') {
                _y++;
            } else {
                _x++;
            }
            
            if (_x > x || _y > y) return false;
            if (map[_x] && map[_x][_y]) return false;
        }
    }
};
