class ArrStack {
    constructor() {
        this.contents = [];
    }
    push(value) {
        this.contents.push(value);
    }
    pop() {
        return this.contents.pop();
    }
    top() {
        return this.contents[this.contents.length-1];
    }
    contains(value) {
        return this.contents.includes(value);
    }
    isEmpty() {
        return this.contents.length === 0;
    }
    size() {
        return this.contents.length;
    }
}


// s = new ArrStack();
// console.log(s.isEmpty());
// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// console.log(s.size());
// console.log(s.isEmpty());
// console.log(s.top());
// s.pop();
// console.log(s.contains(4));
// console.log(s.contains(3));