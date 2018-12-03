/**
 * @param {number} num (num <= 3999)
 * @return {string}
 */
var intToRoman = function(num) {
    const map = [
        ['', 'M', 'MM', 'MMM'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    ];
    const d = [1000, 100, 10, 1];
        
    let res = '';
    for (let i = 0; i < d.length; i++) {
        res += map[i][parseInt(num / d[i])];
        num %= d[i];
    }
    
    return res;
};