class ListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const temp = new ListNode(value);
        if (this.head === null) {
            this.head = temp;
        } else {
            this.tail.next = temp;
        }
        this.tail = temp;
    }

    dequeue() {
        if (this.head === null) return null;
        let temp = this.head;
        this.head = temp.next
        temp.next = null;
        return temp;
    }

    first() {
        if (this.head === null) return null;
        return this.head.value;
    }

    contains(target) {
        if (this.head === null) return false;

        let runner = this.head;
        while (runner !== null) {
            if (runner.value === target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0
        if (this.head === null) return count;

        let runner = this.head;
        while (runner !== null) {
            count++; 
            runner = runner.next;
        }
        return count;
    }

    compare(other_queue) {
        if (this.isEmpty() && other_queue.isEmpty()) return true;
        else if (this.isEmpty() || other_queue.isEmpty()) return false;

        let runner1 = this.head;
        let runner2 = other_queue.head;
        while (runner1 !== null && runner2 !== null) {
            if (runner1.value !== runner2.value) {
                return false;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        if (runner1 === runner2) {
            return true;
        }
        return false;
    }
}

// let q1 = new SLQueue();
// q1.enqueue(1);
// let q2 = new SLQueue();
// q2.enqueue(1);
// console.log(q1.compare(q2));

