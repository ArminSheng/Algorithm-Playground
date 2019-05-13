/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const set = [];
    const pq = [];
    const res = [];
    let max = [0, 0];

    for (let i of buildings) {
        const [x, y, h] = i;
        set.push([x, -h]);
        set.push([y, h]);
    }

    set.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < set.length; i++) {
        if (set[i][0] === set[i - 1][0]) {
            if (getSymbol(set[i][1]) !== getSymbol(set[i - 1][1])) {
                [set[i][1], set[i - 1][1]] = [set[i - 1][1], set[i][1]];
            } else {
                if (set[i][1] < set[i - 1][1]) {
                    set.splice(i - 1, 1);
                } else {
                    set.splice(i, 1);
                }
            }

            // if (set[i][1] > 0 && set[i - 1][1] > 0) {

            // }
        }
    }

    for (let s of set) {
        if (s[1] < 0) {
            pq.push([s[0], -s[1]]);
        } else {
            pq.splice(pq.findIndex(i => {
                return i[1] === s[1];
            }), 1);
        }

        const m = getMax(pq);
        if (max[1] !== m[1]) {
            const idx = res.findIndex(i => {
                return i[0] === s[0];
            });

            if (idx > -1) {
                res[idx][1] = Math.max(res[idx][1], m[1]);
            } else {
                res.push([s[0], m[1]]);
            }

            max = m;
        }
    }

    return res;
};

function getSymbol (n) {
    return n < 0;
}

function getMax(arr) {
    let res = [0, 0];

    arr.forEach(i => {
        if (i[1] > res[1]) {
            res = i;
        }
    });

    return res;
}