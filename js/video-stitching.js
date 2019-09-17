/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {

    const map = {};
    for (let i of clips) {
        if (map[i[0]]) {
            map[i[0]][1] = Math.max(map[i[0]][1], i[1]);
        } else {
            map[i[0]] = i;
        }
    }

    const _clips = Object.values(map);
    _clips.sort((a, b) => a[0] - b[0]);

    if (T === 0) return 0;
    if (_clips[0][0] > 0) return -1;

    const dp = [0];
    let max = 0;

    for (let i = 0; i < _clips.length; i++) {
        const ri = _clips[i][1];
        const lt = _clips[i][0];

        if (lt > max) return -1;

        let v = Math.min(dp[max], dp[lt]);
        v += 1
        if (ri >= T) return v;

        for (let j = max + 1; j <= ri; j++) {
            dp[j] = v;
        }

        max = Math.max(max, ri);
    }

    return dp[T] || -1;
};