import { Node } from './node.js';

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // add to end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // add to beginning
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    // return number of nodes
    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // returns first node
    headNode() {
        if (!this.head) return 'No nodes in list';
        return this.head.value;
    }

    // returns last node
    tail() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current.value;
    }

    // returns node at given index
    at(index) {
        if (index < 0) return 'Invalid index';
        else if (!this.head) return 'No nodes in list';

        let current = this.head;
        let currentIndex = 0;
        while (current) {
            if (currentIndex == index) return current.value;
            current = current.nextNode;
            currentIndex++;
        }
    }

    // removes last node
    pop() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    // returns true if value exists in list, otherwise false
    contains(value) {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        if (current.value === value) return true;
        while (current.nextNode) {
            current = current.nextNode;
            if (current.value === value) return true;
        }
        return false;
    }

    // returns true if value exists in list, otherwise false RECURSIVELY
    containsRec(value, current = this.head) {
        if (!this.head) return 'No nodes in list';

        if (current.nextNode == null && current.value != value) return false;
        if (current.value === value) return true;
        return this.containsRec(value, current.nextNode);
    }

    // returns index of node containing value, otherwise null
    find(value) {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        let currentIndex = 0;
        if (current.value === value) return currentIndex;
        while (current.nextNode) {
            current = current.nextNode;
            currentIndex++;
            if (current.value === value) return currentIndex;
        }
        return null;
    }

    // returns index of node containing value, otherwise null RECURSIVELY
    findRec(value, current = this.head, currentIndex = 0) {
        if (!this.head) return 'No nodes in list';

        if (!current.nextNode && current.value != value) return null;
        if (current.value === value) return currentIndex;
        return this.findRec(value, current.nextNode, currentIndex + 1);
    }

    // prints to string
    toString() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        let string = [`( ${this.head.value} )`];
        while (current.nextNode) {
            current = current.nextNode;
            string.push(`( ${current.value} )`);
        }
        return string.join(' -> ');
    }

    // inserts new node with value at index
    insertAt(value, index) {
        if (index < 0) return 'Invalid index';
        const newNode = new Node(value);
        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous;
        let currentIndex = 0;
        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
        if (currentIndex === index) {
            previous.nextNode = newNode;
            newNode.nextNode = current;
        } else {
            return;
        }
    }
}

export { LinkedList };
