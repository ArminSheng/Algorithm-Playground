/**
 * initialize your data structure here.
 */
class MinStack {
    stack = new Stack();
    mins = new Stack();

    push (x) {
        this.stack.push(x);
        if (this.mins.empty() || x <= this.mins.peek()) {
            this.mins.push(x);
        }
    }

    pop () {
        const res = this.stack.pop();

        if (res === this.mins.peek()) {
            this.mins.pop();
        }

        return res;
    }

    top () {
        return this.stack.peek();
    }

    getMin () {
        return this.mins.peek();
    }
}

class Stack {
    stack = [];

    push (x) {
        this.stack.push(x);
    }

    pop () {
        return this.stack.pop();
    }

    peek () {
        return this.stack[this.stack.length - 1];
    }

    empty () {
        return !this.stack.length;
    }
}

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