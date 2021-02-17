class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addFront(node, value) {
    new_node = new ListNode(value);
    new_node.next = node;
    return new_node;
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

// add new node as tail
function addBack(head, value) {
    const newNode = new ListNode(value);
    if (head === null) return newNode;

    let runner = head;
    while (runner.next !== null) {
        runner = runner.next;
    }
    runner.next = newNode;
    return head;
}
let testList1 = createList([6,1,2,5,7,9]);
// "6 - 1 - 2 - 5 - 7 - 9 - 4" 
console.log(display(addBack(testList1, 4)));

// display the values in the list: "6 - 1 - 2 - 5 - 7 - 9" 
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
let testList2 = createList([6,1,2,5,7,9]);
console.log(display(testList2));

// returns true if target value is in linked list
function containsValue(head, target) {
    let runner = head;
    while (runner !== null) {
        if (runner.value === target) return true;
        runner = runner.next;
    }
    return false;
}
let testList3 = createList([6,1,2,5,7,9]);
console.log(containsValue(testList3, 2));
console.log(containsValue(testList3, 6));
console.log(containsValue(testList3, 8));
console.log(containsValue(testList3, 9));