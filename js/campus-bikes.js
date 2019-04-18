/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    const ans = [];
    const visitedBike = [];
    let disArr = [];
    let count = 0;

    for (let i = 0; i < workers.length; i++) {
        for (let j = 0; j < bikes.length; j++) {
            const dis = distance(workers[i], bikes[j]);
            disArr.push({dis, w: i, b: j});
        }
    }

    disArr.sort((a, b) => {
        if (a.dis === b.dis) {
            if (a.w === b.w) return a.b - b.b;
            return a.w - b.w;
        }

        return a.dis - b.dis;
    });

    for (let pair of disArr) {
        if (count === workers.length) break;

        const {w, b} = pair;
        if (ans[w] === undefined && !visitedBike[b]) {
            ans[w] = b;
            visitedBike[b] = true;
            count++;
        }
    }

    return ans;
};

function distance (p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}