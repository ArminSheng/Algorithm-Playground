/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.mins = [];
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (!this.mins.length || x <= this.mins[this.mins.length - 1]) {
        this.mins.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const res = this.stack.pop();

    if (res === this.mins[this.mins.length - 1]) {
        this.mins.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */