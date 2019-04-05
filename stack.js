class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(item){
        if(this.top === null){
            this.top = new _Node(item, null);
            return this.top;
        }
        let node = new _Node(item, this.top)
        this.top = node;
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

// 3.
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new Stack();
    for(let i=0; i<s.length; i++){
        stack.push(s[i]);
    }
    for(let i=0; i<s.length; i++){
        let item = stack.pop();
        if(item !== s[i]){
            return false;
        }
    }
    return true;
}

//4.
function is_matchingParen(s){
    let stack = new Stack();
    let last;
    for(let i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i])
        }
        if(s[i] === ')' || s[i] === ']' || s[i] === '}'){
            if(last !== s[i]){
                return i;
            }
            last = stack.pop()
        }
    }
    return 'All parentheses match';
}


function main(){
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    console.log(display(starTrek));
    starTrek.pop('McCoy');

    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));

    console.log(is_matchingParen("([])"));
}

main();


