class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    var nn = new Node(data);
    if (this.getSize() === 0) {
      this.head = nn;
      this.tail = nn;
    } else {
      this.tail.next = nn;
      this.tail = nn;
    }
    this.size++;
  }

  removeFirst() {
    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    }
    let nextEle = this.head.next;
    this.head = nextEle;
    this.size--;
  }

  removeLast(idx) {
    if (!idx) idx = this.getSize() - 1;

    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let previousNode = this.getNode(idx);
      this.tail = previousNode;
      this.tail.next = null;
      this.size--;
    }
  }

  remove(idx) {
    if (this.getSize() === 0) throw new Error("empty List");
    else if (idx < 0 || idx >= this.getSize())
      throw new Error("Index out of bounds");
    else if (idx === 0) this.removeFirst();
    else if (idx === this.getSize() - 1 || !idx) this.removeLast(idx);
    else {
      var previousNode = this.getNode(idx);
      previousNode.next = previousNode.next.next;
      this.size--;
    }
  }

  addStart(data) {
    var nn = new Node(data);
    if (this.size === 0) this.push();
    else {
      var ele = this.head;
      this.head = nn;
      nn.next = ele;
    }
    this.size++;
  }

  getNode(idx) {
    let node = this.head;
    let counter = 0;
    while (counter < idx - 1) {
      node = node.next;
      counter++;
    }
    return node;
  }

  addLast(data, idx) {
    var nn = new Node(data);
    var previousNode = this.getNode(idx);

    previousNode.next = nn;
    this.tail = nn;
    this.size++;
  }

  add(data, idx) {
    if (idx < 0 || idx > this.size) throw new Error("Invalid index");
    else if (!idx) this.push(data);
    else if (idx === 0) this.addStart(data);
    else if (idx === this.size) this.addLast(idx);
    else {
      let nn = new Node(data);
      let previousNode = this.getNode(idx);
      let ele = previousNode.next;
      previousNode.next = nn;
      nn.next = ele;
      this.size++;
    }
  }

  show() {
    var ele = this.head;
    while (ele) {
      console.log(ele.data);
      ele = ele.next;
    }
    console.log("------------------");
  }

  getSize() {
    return this.size;
  }
}

var ll = new LinkedList();
console.log(ll);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.show();
ll.addStart(1);
ll.add(90, 3);
ll.show();
ll.remove();
ll.remove(2);
ll.show();
