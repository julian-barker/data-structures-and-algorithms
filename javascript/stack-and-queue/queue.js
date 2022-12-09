'use strict';

const { LinkedList, Node } = require('./linked-list');

class Queue extends LinkedList {
  constructor() {
    super();
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return Boolean(this.front);
  }

  enqueue(val) {
    let back = new Node(val);
    if(!this.front) {
      this.front = back;
      this.back = back;
      return;
    }
    this.back.next = back;
  }

  dequeue() {
    if(!this.front) {
      throw 'ERROR: Cannot dequeue from empty Queue';
    }
    let front = this.front;
    this.front = this.front.next;
    front.next = null;
    return front.val;
  }

  peek() {
    return this.front ? this.front.val : null;
  }
}

module.exports = { Queue, Node };
