class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    var nn = new Node(val);
    this.top = nn;
    this.length = 1;
  }

  push(val) {
    var nn = new Node(val);
    nn.next = this.top;
    this.top = nn;
    this.length++;
    return this;
  }

  pop() {
    if (this.size() === 0) throw new Error("Empty list");
    else if (this.size() === 1) {
      this.top = null;
      this.length--;
      return this;
    } else {
      var next = this.top.next;
      this.top.next = null;
      this.top = next;
      this.length--;
      return this;
    }
  }
  size() {
    return this.length;
  }
}

const stack = new Stack(9);
console.log(stack.push(2));
