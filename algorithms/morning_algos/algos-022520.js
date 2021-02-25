class ListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

class SLStack {
    constructor() {
        this.top = null;
    }
    
    push(value) {
        const newTop = new ListNode(value);
        newTop.next = this.top; // make new node point to top
        this.top = newTop; // change  
    }

    pop() {
        let oldTop = this.top;
        this.top = this.top.next; 
        return oldTop;
    }

    getTop() {
        return this.top.value;
    }

    contains(target) {
        let runner = this.top;
        while (runner !== null) {
            if (runner.value === target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    isEmpty() {
        return this.top === null;
    }

    size() {
        let count = 0;
        let runner = this.top;
        while (runner !== null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const temp = new ListNode(value);
        if (this.head === null) {
            this.head = temp;
        } else {
            this.tail.next = temp;
        }
        this.tail = temp;
        this.length++;
    }

    dequeue() {
        if (this.head === null) return null;
        let temp = this.head;
        this.head = temp.next
        temp.next = null;
        this.length--;
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
        return this.length;
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
    
    isPalindrome() {
        // if the queue has one or no elements, return true
        if (this.length === 0 || this.length === 1) return true;

        let stack = new SLStack();
        const midpoint = Math.floor(this.length/2);
        // Phase 1: push to to stack
        let runner = this.head;
        for (let i = 0; i < midpoint; i++) {
            stack.push(runner.value);
            runner = runner.next;
        }
        // Phase 1.5: potentially skip middle element
        if (this.length % 2 == 1) {
            runner = runner.next;
        }
        // Phase 2: pop from stack
        while (!stack.isEmpty()) {
            if ( stack.pop().value !== runner.value ) {
                return false;
            }
            runner = runner.next; 
        }
        return true;
    }
}

let q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(5);
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log(q.isPalindrome());