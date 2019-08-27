/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let num = '';
    const nums = [];
    const operators = [];

    for (let c of input) {
        if (c < '0') {
            operators.push(c);
            nums.push(num);
            num = '';
        } else {
            num += c;
        }
    }

    if (num) nums.push(num);

    function h (nums, operators) {
        if (nums.length === 1) return nums;

        const res = [];

        for (let i = 0; i < operators.length; i++) {
            const op = operators[i];
            const l = h(nums.slice(0, i + 1), operators.slice(0, i));
            const r = h(nums.slice(i + 1), operators.slice(i + 1));

            for (let m of l) {
                for (let n of r) {
                    res.push(operate(m, n, op));
                }
            }
        }

        return res;
    }

    return h(nums, operators);
}

function operate (a, b, operator) {
    if (operator === '+') {
        return parseInt(a) + parseInt(b);
    }

    if (operator === '-') {
        return a - b;
    }

    if (operator === '*') {
        return a * b;
    }
}
