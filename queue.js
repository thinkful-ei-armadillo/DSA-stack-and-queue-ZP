class _Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, null);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.previous = this.last;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (this.first !== null) {
      this.first.previous = null;
    }
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  return queue.first === null;
}

function display(queue) {
  const arr = [];
  while (queue.first !== null) {
    arr.push(queue.dequeue());
  }
  arr.forEach(i => queue.enqueue(i));
  return arr;
}

function main() {
  //queue
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  console.log(peek(starTrekQ));
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log(display(starTrekQ));
  console.log(starTrekQ.first);

  /*starTrekQ.enqueue('Kirk');
  starTrekQ.dequeue();*/
}

main();
