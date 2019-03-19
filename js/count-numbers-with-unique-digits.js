/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if( n === 0) return 1;
    if( n === 1) return 10;

    let res = 9;
    for (let i = 0; i <= n - 2; i++) {
        res *= 9 - i;
    }
    return res + countNumbersWithUniqueDigits(n - 1);
}

// var countNumbersWithUniqueDigits1 = function(n) {
//     const max = 10 ** n;
//     let unvalid = 0;

//     for (let i = 0; i < max; i++) {
//         const map = [];
//         for (let j of i + '') {
//             if (map[j]) {
//                 unvalid++;
//                 break;
//             }
//             map[j] = true;
//         }
//     }

//     return max - unvalid;
// };