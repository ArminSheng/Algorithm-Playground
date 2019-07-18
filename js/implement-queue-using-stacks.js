class MyQueue {
    stack = [];
    rStack = [];
    front = null;

    push (x) {
        if (!this.stack.length) {
            this.front = x;
        }
        this.stack.push(x);
    }

    pop () {
        if (!this.rStack.length) {
            while (this.stack.length) {
                this.rStack.push(this.stack.pop());
            }
        }

        return this.rStack.pop();
    }

    peek () {
        if (this.rStack.length) return this.rStack[this.rStack.length - 1];
        return this.front;
    }

    empty () {
        return !this.stack.length || !this.rStack.length;
    }
}