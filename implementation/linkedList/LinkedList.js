module.exports = class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
};

class LinkedList {
  constructor(value) {
    const nn = new Node(value);
    this.head = nn;
    this.tail = nn;
    if (value) this.length = 1;
    else this.length = 0;
  }

  getPreviousNodeAt(idx) {
    if (idx < 0 || idx >= this.size()) throw new Error("Invalid index");

    let node = this.head;
    let counter = 0;
    while (counter < idx - 1) {
      node = node.next;
      counter++;
    }

    return node;
  }

  get(idx) {
    if (idx < 0 || idx >= this.size()) throw new Error("Invalid index");
    if (idx === 0) return this.head;
    if (idx === this.size() - 1) return this.tail;

    let node = this.head;
    let counter = 0;
    while (counter < idx) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(idx, val) {
    var node = this.get(idx);
    node.data = val;
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

  insert(idx, val) {
    if (idx === 0) {
      let nn = new Node(val);
      nn.next = this.head;
      this.head = nn;
    } else {
      let previousNode = this.getPreviousNodeAt(idx);
      let nn = new Node(val);
      let temp = previousNode.next;
      previousNode.next = nn;
      nn.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.size() === 0) throw new Error("List is empty");
    else if (this.size() === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let previousNode = this.getPreviousNodeAt(this.size() - 1);
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
    this.length++;
    return this;
  }
  // remove an element from the beginning
  shift() {
    if (this.size() === 0) throw new Error("List is empty");
    else if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.size()) throw new Error("Invalid idx");
    else if (idx === 0) return this.shift();
    else if (idx === this.size() - 1) return this.pop();
    else {
      const previousNode = this.getPreviousNodeAt(idx);
      const removedNode = previousNode.next;
      previousNode.next = removedNode.next;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }
}

module.exports = { LinkedList };

const ll = new LinkedList(11);
ll.push(23);
ll.push(27);
ll.push(2);
console.log(ll);
ll.remove(1);
console.log(ll);
