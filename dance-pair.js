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

function dancePair(list){
    const queueMen = new Queue();
    const queueWomen = new Queue();
    let men = 0;
    let women = 0;
    for(let i=0; i< list.length; i++){
        if(list[i].gender === 'm'){
            queueMen.enqueue(list[i].name);
            men+=1;
        } else {
            queueWomen.enqueue(list[i].name);
            women+=1;
        }
    }

    while(men > 0 && women > 0){
        let male = queueMen.dequeue();
        let female = queueWomen.dequeue();
        console.log(`Female dancer is ${female}, and the male dancer is ${male}`);
        men--;
        women--;
    }

    if(women > 0){
        console.log(`There are ${women} female dancers waiting to dance`)
    } else {
        console.log(`There are ${men} male dancers waiting to dance`)

    }
}

  function main(){
    const data = [  
                    {gender: 'f', name: 'Jane'},
                    {gender: 'm', name: 'Frank',},
                    {gender: 'm', name: 'John',},
                    {gender: 'm', name: 'Sherlock',},
                    {gender: 'f', name: 'Madonna',},
                    {gender: 'm', name: 'David',},
                    {gender: 'm', name: 'Christopher',},
                    {gender: 'f', name: 'Beyonce',},
                 ]

    console.log(dancePair(data));
  }

  main();