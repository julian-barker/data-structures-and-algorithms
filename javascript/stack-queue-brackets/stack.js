'use strict';

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

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
      return null;
    }
    let popped = this.top;
    this.top = this.top.next;
    popped.next = null;
    return popped.val;
  }

  peek() {
    return this.top && this.top.val;
  }

}

module.exports = { Stack, Node };
