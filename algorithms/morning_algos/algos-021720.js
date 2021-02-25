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

function removeFront1(head) {
    // if list is empty or contains one element, return null
    if (head === null || head.next === null) {
        return null;
    }
    // save second node and remove head node's 
    // reference to second node
    const newHead = head.next;
    head.next = null;
    return newHead;
}

function removeBack(head) {
    // if list is empty or contains one element, return null
    if (head === null || head.next === null) {
        return null;
    }
    // traverse until runner points to second to last node
    let runner = head;
    for (runner; runner.next.next !== null; ) {
        runner = runner.next;
    }
    runner.next = null; // remove reference to last node
    return head;
}