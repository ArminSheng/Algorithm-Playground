/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms2 = function(rooms) {
    function dfs(i) {
        visited[i] = true;
        count++;
        
        for (let w of rooms[i]) {
            if (!visited[w]) dfs(w);
        }
    }
    const visited = [];
    let count = 0;

    dfs(0);
    return count === rooms.length;
};

var canVisitAllRooms = function(rooms) {
    const visited = [];
    let count = 0;
    const q = [0];
    let i;

    while (q.length) {
        i = q.shift();
        if (visited[i]) continue;
        visited[i] = true;
        count++;

        for (let w of rooms[i]) {
            if (!visited[w]) q.push(w);
        }
    }

    return count === rooms.length;
};