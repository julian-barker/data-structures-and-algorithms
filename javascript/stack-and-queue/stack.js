'use strict';

const { LinkedList, Node } = require('./');

class Stack extends LinkedList {
  constructor() {
    super();
    this.top = null;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }

  push(val) {
    let top = new Node(val, this.top);
    this.top = top;
  }

  pop() {
    if (this.top === null) {
      throw 'Error: cannot pop from an empty list';
    }
    let popped = this.top;
    this.top = this.top.next;
    popped.next = null;
    return popped;
  }

  peek() {
    return this.top?.value;
  }

}

let stack = new Stack();
Stack.push(1);
Stack.push(2);
Stack.push(5);
Stack.push(3);

let emptyStack = new Stack();

console.log(stack.peek(), emptyStack.peek());

module.exports = { Stack, Node };
