/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit1 = function(gas, cost) {
    let n = gas.length;
    let start;
    let remain;
    const marked = [];

    for (let i = 0; i < n; i++) {
        if (marked[i]) return -1;

        marked[i] = true;
        if (cost[i] <= gas[i]) {
            start = i;
            remain = 0;
            remain += gas[i] - cost[i];

            if (i === n - 1) {
                if (n === 1) return 0;
                if (remain === 0) return -1;
                else i = 0;
                i = 0;
            } else {
                i++;
            }
            
            while (start !== i) {
                if (gas[i] + remain >= cost[i]) {
                    remain += gas[i] - cost[i];
                } else {
                    break;
                }

                if (i === n - 1) {
                    i = 0;
                } else {
                    i++;
                }
            }

            if (start === i) {
                return start;
            }
        }
    }

    return -1;
};

var canCompleteCircuit = function(gas, cost) {
    let totalOver = 0;
    let over = 0;
    let start;

    for (let i = 0; i < gas.length; i++) {
        if (!start) start = i;

        over += gas[i] - cost[i];
        totalOver += over;

        if (over < 0) {
            start = null;
            over = 0;
        }
    }

    return totalOver >= 0 ? start : -1;
};