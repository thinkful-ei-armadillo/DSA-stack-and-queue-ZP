class _Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(item){
        if(this.top === null){
            this.top = new _Node(item, null);
            return this.top;
        }
    }

    pop(){
        let node  = this.top;
        this.top =  node.next;
        return node.value;
    }
}

function peek(stack){
    return stack.top? stack.top : 'No element in stack';
}

function isEmpty(stack){
    return stack.top === null? 'Stack is empty' : 'Stack is not empty';
}

function display(stack){
    const list = []
    while(stack.top !== null){
        list.push(stack.pop());
    }
    list.reverse().forEach(item => {
        stack.push(item);
    })
    return list;
}

function main(){
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    console.log(display(starTrek));
    starTrek.pop('McCoy');
}

main();