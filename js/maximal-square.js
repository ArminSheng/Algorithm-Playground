/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = [];
    let max = 0;
  
    for (let i = 0, l = matrix.length; i < l; i++) {
      dp[i] = dp[i] || [];
        
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = parseInt(matrix[i][j]);
        } else if (matrix[i][j] == 1) {
            let min = Math.min.apply(null, [dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]]);
            dp[i][j] = min + 1;
        } else {
            dp[i][j] = 0;
        }
  
        max = Math.max(max, dp[i][j]);
      }
    }
  
    return max * max;
  };