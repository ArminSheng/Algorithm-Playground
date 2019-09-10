var numSquares = function(n) {
    const arr = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        const sqrt = Math.floor(Math.sqrt(i));
        if (sqrt * sqrt === i) {
            arr[i] = 1;
            continue;
        }
        
        const ans = [];
        for (let j = 1; j < i; j++) {
            ans.push(arr[j] + arr[i - j]);
        }

        arr[i] = Math.min(...ans);
    }

    return arr[n];
}