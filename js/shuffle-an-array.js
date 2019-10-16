/**
 * @param {number[]} nums
 * Fisher-Yates 洗牌算法
 */
var Solution = function(nums = []) {
    this.nums = nums;
    this.arr = nums.slice();
    this.len = nums.length;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.arr = this.nums.slice();
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const len = this.len;
    for (let i = 0; i < len; i++) {
        swap(this.arr, i, getRandomInt(i, this.len - 1));
    }

    return this.arr;
};

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */