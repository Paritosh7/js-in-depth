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
    else 
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    
  }
  size() {
    return this.length;
  }
}

const stack = new Stack(9);
console.log(stack.push(2));
