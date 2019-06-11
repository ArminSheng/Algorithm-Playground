/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    const res = [1];

    while (res.length < n) {
        const v2 = res[p2] * 2;
        const v3 = res[p3] * 3;
        const v5 = res[p5] * 5;
        const min = Math.min(v2, v3, v5)
        res.push(min);

        if (v2 === min) p2++;
        if (v3 === min) p3++;
        if (v5 === min) p5++;
    }

    return res[n - 1];
}

var nthUglyNumber1 = function(n, res = [0, 1]) {
    if (!n) return n;
    const s = new Set();
    let i = 1;

    while (i < n) {
        s.add(res[i] * 2);
        s.add(res[i] * 3);
        s.add(res[i] * 5);

        i++;
        min = Math.min(...s);
        s.delete(min);
        res.push(min);
    }

    return res[n];
};