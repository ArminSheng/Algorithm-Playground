/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const len = s.length;
    const st1 = [];
    const st2 = [];
    let res = 0;
    let num = '';

    for (let i = 0; i < len; i++) {
        if (s[i] === '+' || s[i] === '-') {
            st1.push(s[i]);
            if (num) {
                st2.push(num - 0);
                num = '';
            }
        }

        else if (s[i] === '(') {
            i++;
            let [pair, start, end] = [1, i, i];

            while (pair) {
                for (; i < len; i++) {
                    if (s[i] === '(') {
                        pair++;
                        end++;
                    }

                    else if (s[i] === ')') {
                        pair--;
                        if (pair === 0) {
                            break;
                        } else {
                            end++;
                        }
                    }

                    else {
                        end++;
                    }
                }
            }

            st2.push(calculate(s.slice(start, end)));
        } else if (s[i] !== ' ') {
            num += s[i];
        }
    }

    if (num) st2.push(num - 0);
    res = st2.shift();

    while (st1.length) {
        const [op, val] = [st1.shift(), st2.shift()];

        if (op === '+') {
            res += val;
        } else {
            res -= val;
        }
    }

    return res;
};