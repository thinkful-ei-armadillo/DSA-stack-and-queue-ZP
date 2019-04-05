class _Node {
    constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
  
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
  }

function bank(list){
    const queue = new Queue();
    list.forEach(customer => {
        queue.enqueue(customer);
    });
    let queueCount = 1;
    while(queue.first !== null){
        if(queueCount%4 === 0){
            queue.enqueue(queue.dequeue());
            queueCount = 1; 
        }else {
            console.log(queue.dequeue());
            queueCount++
        }
    }
    
    // while(queue.first !== null){
    //     if(Math.random() <= 0.25){
    //         queue.enqueue(queue.dequeue());
    //     }else {
    //         console.log(queue.dequeue());
    //     }
    // }
}


  function main(){
    const customers = ['john', 'joe', 'mike', 'charlie', 'alex', 'david', 'nick', 'daniel']

    console.log(bank(customers));
  }

  main();