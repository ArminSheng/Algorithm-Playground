/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;

    let column = 0;
    const matrix = [];
    s = s.split('');
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        arr = [];

        let remain = column % (numRows - 1);
        if (remain === 0) {
            arr.push.apply(arr, s.slice(i, i + numRows));
		    i += (numRows - 1);
        } else {
            arr[numRows - 1 - remain] = s[i];
        }
		
		column++;
        matrix.push(arr);
    }
    
    let str = '';
    let rows = 0;
    while (rows < numRows) {
        for (let i = 0; i < matrix.length; i++) {
            str += (matrix[i][rows] || '');
        }
		rows++;
    }

    return str;
};