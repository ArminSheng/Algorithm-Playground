/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const L = ratings.length;
    let min = ratings[0], minI = 0;
    const candy = Array(ratings.length).fill(1);

    for (let i = 0; i < L; i++) {
        if (ratings[i] < min) {
            min = ratings[i];
            minI = i;
        }
    }

    for (let i = minI + 1; i < L; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1;
        }
    }

    for (let i = minI - 1; i > 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candy[i] = candy[i + 1] + 1;
        }
    }

    let sum = candy.reduce((cur, acc) => acc + cur, 0);

    return sum;
};