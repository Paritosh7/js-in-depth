class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    if (!val) return;
    const nn = new Node(val);
    this.first = nn;
    this.last = nn;
    this.length = 1;
  }

  enqueue(val) {
    var nn = new Node(val);
    if (this.size() === 0) {
      this.first = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      this.last = nn;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.size() === 0) throw new Error("Queue is empty");
    let temp = this.first;
    if (this.size() === 0) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  size() {
    return this.length;
  }
}
