/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.hash = {};
    this.arr = [];
    this.len = 0;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    const isEmpty = this.hash[val] && this.hash[val].length;
    this.hash[val] = this.hash[val] || [];
    this.hash[val].push(this.len);

    this.arr[this.arr.length] = val;
    this.len++;
    return !isEmpty;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    const ele = this.hash[val] && this.hash[val].pop();

    if (ele !== undefined) {
        this.arr[ele] = undefined;
        this.len--;
    }

    return ele !== undefined;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    if (!this.len) return;

    const r = Math.floor(this.arr.length * Math.random());

    return this.arr[r] === undefined ? this.getRandom() : this.arr[r];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */