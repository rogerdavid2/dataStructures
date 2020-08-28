class Stack {
    constructor() {
        this.store = [];
        this.stackSize = 0;
    }

    isEmpty() {
        return this.stackSize === 0;
    }

    push(value) {
        this.store[this.stackSize] = value;
        this.stackSize += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            let poppedValue = this.store[this.size - 1];
            delete this.store[this.size - 1];
            this.stackSize -= 1;
            return poppedValue;
        }
    }

    peek() {
        if (this.size === 0) {
            return null;
        } else {
            return this.store[this.stackSize - 1];
        }
    }

    toString() {
        if (this.isEmpty()) {
            return "[]";
        } else {
            let result = "[" + this.store[0];
            let count = 1;
            while (count <= this.stackSize - 1) {
                result += ", " + this.store[count];
                count++;
            }
            result += "]";
            return result;
        }
    }
}

export default Stack;