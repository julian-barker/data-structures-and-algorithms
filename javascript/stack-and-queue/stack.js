'use strict';

const { Node } = require('./linked-list');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return !this.top;
  }

  push(val) {
    let top = new Node(val, this.top);
    this.top = top;
  }

  pop() {
    if (this.top === null) {
      throw 'ERROR: cannot pop from an empty list';
    }
    let popped = this.top;
    this.top = this.top.next;
    popped.next = null;
    return popped;
  }

  peek() {
    return this.top ? this.top.val : null;
  }

}

module.exports = { Stack, Node };
