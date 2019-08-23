/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {

    /**
     * @param {string} input
     * @return {number[]}
     */
    function h (str, pos) {
        const res = [];
        let sum = 0;
        let num = '';
        let lastOperator = '+';

        for (let i = pos; i < str.length; i++) {
            const c = str[i];

            if (c < '0') {
                const nums = h(str, i + 1);
                sum = operate(sum, parseInt(num), lastOperator);

                for (let n of nums) {
                    res.push(operate(sum, n, c));
                }

                lastOperator = c;
                num = '';
            } else {
                num += c;
            }
        }
        if (!res.length) return [parseInt(num)];
        if (pos === 0) res.push(operate(sum, parseInt(num), lastOperator))

        return res;
    }

    return h(input, 0);
};

function operate (a, b, operator) {
    if (operator === '+') {
        return a + b;
    }

    if (operator === '-') {
        return a - b;
    }

    if (operator === '*') {
        return a * b;
    }
}