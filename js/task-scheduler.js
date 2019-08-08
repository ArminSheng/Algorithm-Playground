/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const dic = {};
    let max = 0;

    for (let t of tasks) {
        dic[t] = dic[t] || 0;
        dic[t]++;
        if (dic[t] > max) {
            max = dic[t];
        }
    }

    let res = (max - 1) * (n + 1);

    for (let t in dic) {
        if (dic[t] === max) {
            res++;
        }
    }

    return res < tasks.length ? tasks.length : res;
}

// Error solution
var leastInterval = function(tasks, n) {
    let count = 0;
    const mapCount = {};
    const dic = {};
    let remain = tasks.length;

    for (let t of tasks) {
        dic[t] = dic[t] || 0;
        dic[t]++;
    }

    const entries = Object.entries(dic).sort((a, b) => b[1] - a[1]);

    while (remain) {
        for (let k in mapCount) {
            if (mapCount[k]) mapCount[k]--;
        }

        for (let j = 0; j < entries.length; j++) {
            const key = entries[j][0];
            if (!mapCount[key] && entries[j][1]) {
                // const t = tasks.splice(j, 1);
                mapCount[key] = n + 1;
                entries[j][1]--;
                remain--;
                break;
            }
        }

        count++;
    }

    return count;
};
