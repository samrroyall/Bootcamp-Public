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
    // all these are methods of our stack class
    // FILO / LIFO structure

    // push(value) - add a node with the given value
    // to the stack (at the top)
    push(value) {
        const newTop = new ListNode(value);
        newTop.next = this.top; // make new node point to top
        this.top = newTop; // change  
    }

    // pop() - remove the last node of
    // the stack (from the top) and return it (the node)
    pop() {
        let oldTop = this.top;
        this.top = this.top.next; 
        return oldTop;
    }

    // top() - return the value of the top node
    // in the stack
    getTop() {
        return this.top.value;
    }

    // contains(value) - return true if the stack contains
    // the given value and false otherwise
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

    // isEmpty() - return true if the stack if empty and
    // false otherwise
    isEmpty() {
        return this.top === null;
    }

    // size() - return the length of the stack
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

//var x = new SLStack();
//x.push(1);
//x.push(2);
//x.push(3);
//x.push(4);
//console.log(x.isEmpty());
//console.log(x.size());
//console.log(x.contains(6));
//let top = x.top();
//top.display();
//console.log(x.top());
//x.display();




