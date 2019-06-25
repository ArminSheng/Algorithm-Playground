/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent1 = function(words, k) {
    const hash = {};

    for (let w of words) {
        if (hash[w]) {
            hash[w]++;
        } else {
            hash[w] = 1;
        }
    }

    const en = Object.entries(hash);
    en.sort((a, b) => {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }

        return b[1] - a[1];
    });

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(en[i][0]);
    }

    return res;
};

var topKFrequent = function(words, k) {
    const compare = function (a, b) {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }

        return b[1] - a[1];
    };

    const pq = new IndexPriorityQueue([], compare);
    const res = [];

    const hash = {};

    for (let w of words) {
        if (hash[w]) {
            hash[w]++;
        } else {
            hash[w] = 1;
        }
    }

    const en = Object.entries(hash);
    en.forEach(i => {
        pq.push(i);
    });

    while (k) {
        res.push(pq.pop()[0]);
        k--;
    }

    return res;
}

/**
 * 索引优先队列
 */
class IndexPriorityQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }

    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    _up(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}