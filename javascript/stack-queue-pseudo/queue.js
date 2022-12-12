'use strict';

const { Stack, Node } = require('./linked-list');

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
    let back = new Node(val);

    this.backward.push(back);
    this.back = this.backward.head;

    let forward = new Stack();
    let curr = this.backward.head;

    while(curr) {
      let newNode = new Node(curr.val);
      forward.push(newNode);
      curr = curr.next;
    }

    this.forward = forward;
    this.front = this.forward.head;
  }

  dequeue(val) {
    let front = new Node(val);

    this.forward.push(front);
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
  }

  peek() {
    return this.front ? this.front.val : null;
  }
}

module.exports = { Queue, Node, Stack };
