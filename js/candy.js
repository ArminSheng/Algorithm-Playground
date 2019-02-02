/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candy = Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = Math.max(candy[i - 1] + 1, candy[i]);
        } 
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candy[i] = Math.max(candy[i + 1] + 1, candy[i]);
        }
    }

    return candy.reduce((cur, acc) => cur + acc, 0);
}

var candy2 = function(ratings) {
    function findMin () {
        let min;
        let minVal;
        ratings.forEach((r, i) => {
            if (!candy[i] && (min === undefined || r < minVal)) {
                minVal = r;
                min = i;
            }
        });

        return min;
    }

    const candy = Array(ratings.length).fill(0);
    let start = findMin();
    
    while(start !== undefined) {
        candy[start] = 1;
        for (let i = start + 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candy[i] = Math.max(candy[i - 1] + 1, candy[i]);
            } else break;
        }

        for (let i = start - 1; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candy[i] = Math.max(candy[i + 1] + 1, candy[i]);
            } else break;
        }

        start = findMin();
    }
    return candy.reduce((cur, acc) => cur + acc, 0);
};