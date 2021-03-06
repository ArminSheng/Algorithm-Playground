/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
    const stack = [];
    let d = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (/\d/.test(char)) {
        d = d * 10 + parseInt(s[i], 10);
      }
      if (/[\+\-\*\/]/.test(char) || i === s.length - 1) {
        if (sign === '+') {
          stack.push(d);
        }
        if (sign === '-') {
          stack.push(-d);
        }
        if (sign === '*' || sign === '/') {
          const tmp =
            sign === '*' ? stack.pop() * d : parseInt(stack.pop() / d);
          stack.push(tmp);
        }
        sign = char;
        d = 0;
      }
    }
    return stack.reduce((pre, v) => {
      return pre + v;
    });
  };

var calculate2 = function(s) {
    const operators = [];
    const nums = [];
    let num = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 0 && s[i] <= 9) {
            num += s[i];
        } else if (s[i] !== ' ') {
            operators.push(s[i]);
            nums.push(num - 0);
            num = '';
        }

        while (nums.length > 2 && operators.length > 1) {
            calculating(operators, nums);
        }
    }

    if (num) {
        nums.push(num - 0);
    }

    while (operators.length) {
        calculating(operators, nums);
    }

    return nums[0];
};

function calculating (operators, nums) {
    let op = operators.shift();
    let n1 = nums.shift();
    let n2 = nums.shift();
    if ((op === "+" || op === '-') && (operators[0] === '*' || operators[0] === '/')) {
        op = operators.splice(0, 1, op)[0];
        n1 = nums.splice(0, 1, n1)[0];
        [n1, n2] = [n2, n1];

        nums.splice(1, 0, calc[op](n1, n2));
    } else {
        nums.unshift(calc[op](n1, n2));
    }
}

const calc = {
    '+': (n1, n2) => {
        return n1 + n2;
    },
    '-': (n1, n2) => {
        return n1 - n2;
    },
    '*': (n1, n2) => {
        return n1 * n2;
    },
    '/': (n1, n2) => {
        return Math.floor(n1 / n2);
    }
}