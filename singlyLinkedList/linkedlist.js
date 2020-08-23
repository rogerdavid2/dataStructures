import ListNode from './listnode.js';

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            current = current.next;
            count++;
        }
        return count;
    }

    toString() {
        if (this.head === null) {
            return "[]";
        } else {
            let result = "[" + this.head.data;
            let current = this.head.next;
            while (current != null) {
                result += ", " + current.data;
                current = current.next;
            }
            result += "]";
            return result;
        }
    }

    indexOf(value) {
        let index = 0;
        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    addToBack(value) {
        if (this.head === null) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
    }
}

export default LinkedList;