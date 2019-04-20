/**
 * @param {number} N
 * @return {boolean}
 */
var confusingNumber = function(N) {
    const map = [0, 1, null, null, null, null, 9, null, 8, 6];
    let rotated = [];

    for (let i of String(N)) {
        if (map[i] === null) return false;
        rotated.unshift(map[i]);
    }

    return Number(rotated.join('')) !== N;
};