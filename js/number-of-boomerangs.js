/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const len = points.length;
    let res = 0;

    for (let i = 0; i < len; i++) {
        const map = {};
        let x1 = points[i][0];
        let y1 = points[i][1];

        for (let j = 0; j < len; j++) {
            if (i === j) continue;
            const x2 = points[j][0];
            const y2 = points[j][1];
            const dis = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

            if (map[dis]) {
                res += 2 * map[dis];
                map[dis]++;
            } else {
                map[dis] = 1;
            }
        }
    }

    return res;
};