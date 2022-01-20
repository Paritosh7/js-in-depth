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
    var previousNode = getNode(idx);

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
  }

  getSize() {
    return this.size;
  }
}

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.show();
console.log("--------------------");
ll.addStart(1);
ll.add(90, 3);
ll.show();
