class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    if (this.top === null) {
      this.top = new _Node(item, null);
      return this.top;
    }
    let node = new _Node(item, this.top);
    this.top = node;
  }

  pop() {
    let node = this.top;
    this.top = node.next;
    return node.value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.stack = new Stack();
  }

  enqueue(data) {
    if (this.stack.top === null) {
      this.stack.push(data);
      this.first = this.stack.top;
    } else {
      this.stack.push(data);
    }
    this.last = this.stack.top;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const tempS = new Stack();
    while (this.stack.top !== null) {
      tempS.push(this.stack.pop());
    }
    const popped = tempS.pop();
    this.first = null;
    this.last = null;
    while (tempS.top !== null) {
      this.enqueue(tempS.pop());
    }
    return popped;
  }
}

function main() {
  //queue
  debugger;
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  console.log(starTrekQ.first, starTrekQ.last);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log('after dequeu');
  console.log(starTrekQ.first, starTrekQ.last);
  //console.log(starTrekQ.first);

  /*starTrekQ.enqueue('Kirk');
  starTrekQ.dequeue();*/
}

main();
