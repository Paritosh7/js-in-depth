class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const nn = new Node(value);
    this.head = nn;
    this.tail = nn;
    if (value) this.length = 1;
    else this.length = 0;
  }

  getNodeAt(idx) {
    if (idx === 0) return this.head;
    if (idx === this.size() - 1) return this.tail;

    let node = this.head;
    let counter = 0;
    while (counter < idx - 1) {
      node = node.next;
      counter++;
    }

    return node;
  }

  size() {
    return this.length;
  }

  push(value) {
    const nn = new Node(value);
    if (this.size() === 0) {
      this.head = nn;
      this.tail = nn;
    } else {
      this.tail.next = nn;
      this.tail = nn;
    }
    this.length++;
    // only to show the list when element is pushed
    return this;
  }

  pop() {
    if (this.size() === 0) throw new Error("List is empty");
    else if (this.size() === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      // -2 because because if size is 2, then i need the first node
      // which will be at the 0 index
      let previousNode = this.getNodeAt(this.size() - 2);
      this.tail = previousNode;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }
  // add an element at the beginning.
  unshift(val) {
    const nn = new Node(val);
    if (this.size() === 0) {
      this.head = nn;
      this.tail = nn;
    } else {
      nn.next = this.head.next;
      this.head = nn;
    }
    this.size++;
    return this;
  }
  // remove an element from the beginning
  shift() {
    if (this.size() === 0) throw new Error("List is empty");
    else if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
  }
}
