class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createList(vals) {
    let head = null;
    let runner = undefined;
    for (let i = 0; i < vals.length; i++) {
        if (i === 0) {
            head = new ListNode(vals[i]);
            runner = head;
            continue;
        }
        runner.next = new ListNode(vals[i]);
        runner = runner.next;
    }
    return head;
}

function display(head) {
    let list_string = "";
    let runner = head;
    while (runner !== null) {
        list_string += `${runner.value}`;
        if (runner.next !== null) {
            list_string += " - ";
        }
        runner = runner.next;
    }
    return list_string;
}

function secondToLastValue(head) {
    if (head === null || head.next === null) return null;

    let runner = head;
    while (runner.next.next !== null) {
        runner = runner.next;
    }

    return runner.value;
}
// console.log(secondToLastValue(createList([1,2,3,4])));
// console.log(secondToLastValue(createList([1])));
// console.log(secondToLastValue(createList([])));

function prependVal(head, value, target) {
    let newNode = new ListNode(value);

    if (head === null) return newNode;

    let runner = head;
    while (runner.next !== null) {
        if (runner.next.value === target) {
            let temp = runner.next;
            runner.next = newNode;
            newNode.next = temp;
            return head;
        }
        runner = runner.next;
    }
    // set `temp` as new head and return
    newNode.next = head;
    return newNode;
}

// console.log(display(prependVal(createList([]), 7, 1)));
// console.log(display(prependVal(createList([5]), 7, 1)));
// console.log(display(prependVal(createList([1,2,3,4]), 7, 1)));
// console.log(display(prependVal(createList([1,2,3,3,3,4]), 7, 3)));
// console.log(display(prependVal(createList([1,2,3,4]), 7, 8)));

function appendVal(head, value, target) {
    let newNode = new ListNode(value); 

    if (head === null) return newNode;

    let runner = head; 
    let tail = null;
    while (runner !== null) {
        // set tail pointer for later 
        // just in case
        if (runner.next === null) tail = runner;

        if (runner.value === target) {
            // insert newNode after runner
            let temp = runner.next;
            runner.next = newNode;
            newNode.next = temp;
            return head;
        }
        runner = runner.next;
    }
    // if we haven't returned yet (no node with value of `target`)
    // append `newNode` to tail of list
    if (tail !== null) tail.next = newNode;
    return head;
}

// console.log(display(appendVal(createList([]), 7, 1)));
// console.log(display(appendVal(createList([5]), 7, 1)));
// console.log(display(appendVal(createList([1,2,3,4]), 7, 1)));
// console.log(display(appendVal(createList([1,2,3,3,3,4]), 7, 3)));
// console.log(display(appendVal(createList([1,2,3,4]), 7, 8)));






