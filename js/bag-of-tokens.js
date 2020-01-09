/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
    let res = 0;
    let score = 0;
    tokens.sort((a, b) => a - b);

    for (let i = 0; i < tokens.length; i++) {
            if (P >= tokens[i]) {
                score += 1;
                res = score;
                P -= tokens.shift();
                i--;
            } else {
                if (score && tokens.length > 1) {
                    P += tokens.pop();
                    score--;
                    i--;
                }
            }
    }

    return res;
};