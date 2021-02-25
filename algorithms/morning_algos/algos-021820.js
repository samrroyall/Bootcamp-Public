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

function maxToBack(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let max = head.value;
    let beforeMax = null;
    let runner = head;
    while (runner.next !== null) {
        if (runner.next.value > max) {
            max = runner.next.value;
            beforeMax = runner;
        }
        runner = runner.next;
    }

    if (beforeMax === null) {
        return head;
    }

    let maxNode = beforeMax.next;
    // make beforeMax not point to max node
    beforeMax.next = beforeMax.next.next;
    // make runner (last node) point to maxNode
    // make max node point to null
    runner.next = maxNode;
    maxNode.next = null;

    return head; 
}

// console.log("maxToBack");
// console.log(display(maxToBack(createList([]))));
// console.log(display(maxToBack(createList([3]))));
// console.log(display(maxToBack(createList([3, 2, 6, 1, 4]))));

function minToFront(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let min = head.value;
    let beforeMin = null;
    let runner = head;
    while (runner.next !== null) {
        if (runner.next.value < min) {
            min = runner.next.value;
            beforeMin = runner;
        }
        runner = runner.next;
    }

    if (beforeMin === null) {
        return head;
    }
    let minNode = beforeMin.next;
    // make beforeMin not point to max node
    beforeMin.next = beforeMin.next.next;
    // make minNode point to head
    minNode.next = head;
    return minNode; 
}

// console.log("minToFront");
// console.log(display(minToFront(createList([]))));
// console.log(display(minToFront(createList([3]))));
// console.log(display(minToFront(createList([3, 2, 1, 6, 4]))));

function partition(head, target) {
    if (head === null || head.next === null) {
        return head;
    }

    let after_head = new ListNode(undefined);
    let after = after_head;
    let before_head = new ListNode(undefined, after_head);
    let before = before_head;

    let runner = head;
    while (runner !== null) {
        let next = runner.next;
        if (runner.value < target) {
            runner.next = after_head; 
            before.next = runner;
            before = before.next;
        } else if (runner.value > target) {
            runner.next = null;
            after.next = runner;
            after = after.next;
        } else {
            runner.next = after_head.next;
            after_head.next = runner;
            if (after === after_head) {
                after = after.next;
            }
        }
        runner = next;
    }
    before.next = before.next.next;
    return before_head.next;
}

// console.log("partition");
// console.log(`${display(partition(createList([]), 5))}, 5`);
// console.log(`${display(partition(createList([3]), 3))}, 3`);
// console.log(`${display(partition(createList([3]), 2))}, 2`);
// console.log(`${display(partition(createList([3]), 4))}, 4`);
// console.log(`${display(partition(createList([4, 4, 2, 5, 6, 1, 4]), 4))}, 4`);
// console.log(`${display(partition(createList([4, 3, 3, 2, 5, 6, 3]), 4))}, 4`);
// console.log(`${display(partition(createList([7, 2, 4, 4, 5, 6, 2]), 4))}, 4`);
// console.log(`${display(partition(createList([2, 2, 1, 5, 6, 2, 4]), 4))}, 4`);
// console.log(`${display(partition(createList([2, 2, 1, 5, 6, 2, 3]), 4))}, 4`);
