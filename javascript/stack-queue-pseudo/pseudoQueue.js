'use strict';

const { Stack, Node } = require('./stack');

class Queue {
  constructor() {
    this.forward = new Stack();
    this.backward = new Stack();
    this.front = this.forward.top;
    this.back = this.backward.top;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(val) {
    this.backward.push(val);
    console.log(this.backward);
    this.back = this.backward.top;
    console.log(this.back);


    let forward = new Stack();
    let curr = this.backward.top;

    while(curr) {
      forward.push(curr.val);
      curr = curr.next;
    }

    this.forward = forward;
    this.front = this.forward.top;
  }

  dequeue() {
    if(!this.front) {
      throw 'ERROR: Cannot dequeue from an empty Queue';
    }

    const popped = this.forward.pop();
    this.front = this.forward.head;

    let backward = new Stack();
    let curr = this.forward.head;

    while(curr) {
      let newNode = new Node(curr.val);
      backward.push(newNode);
      curr = curr.next;
    }

    this.backward = backward;
    this.back = this.backward.head;

    return popped;
  }

  peek() {
    return this.front ? this.front.val : null;
  }
}

module.exports = { Queue, Node, Stack };
