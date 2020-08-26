class Queue {
    constructor() {
        this.store = [];
        this.front = 0;
        this.end = 0;
    }

    enqueue(data) {
        this.store[this.end] = data;
        this.end += 1;
    }

    dequeue() {
        if (front === end) {
            return null;
        } else {
            let data = this.store[this.front];
            delete this.store[this.front]
            this.front += 1;
            return data;
        }
    }

    size() {
        return this.end - this.front;
    }

    peek() {
        if (this.size === 0) {
            return null;
        } else {
            return this.store[this.front];
        }
    }
}

export default Queue;