/**
 * @param numbers: Give an array numbers of n integer
 * @return: Find all unique triplets in the array which gives the sum of zero.
 */
const threeSum = function (numbers) {
    // write your code here
    numbers.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < numbers.length; i++) {
        if(i-1 >= 0 && numbers[i] === numbers[i-1]) continue;
        let j = i + 1;
        let k = numbers.length - 1;
        while (j < k) {
            let iVal = numbers[i];
            let jVal = numbers[j];
            let kVal = numbers[k];
            if ((iVal + jVal + kVal) > 0) {
                k--;
            } else if ((iVal + jVal + kVal) < 0) {
                j++;
            } else {
                res.push([iVal, jVal, kVal]);
                j++;
                k--;

                while(j < k && jVal === numbers[j-1]) j++;
                while(j < k && kVal === numbers[k+1]) k--;
            }
        }
    }
    return res;
}

