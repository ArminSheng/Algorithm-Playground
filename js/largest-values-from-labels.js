/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    const len = values.length;
    const items = [];
    const count = {};
    let res = 0;
    let amount = 0;

    for (let i = 0; i < len; i++) {
        items.push({v: values[i], l: labels[i]});
        count[labels[i]] = 0;
    }

    items.sort((a, b) => b.v - a.v);

    for (let i = 0; i < len; i++) {
        if (amount >= num_wanted) break;

        let item = items[i];
        if (count[item.l] < use_limit) {
            count[item.l]++;
            amount++;
            res += item.v;
        }
    }

    return res;
};