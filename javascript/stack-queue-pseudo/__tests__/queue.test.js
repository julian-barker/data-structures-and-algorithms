'use strict';

// Require our linked list implementation
const { Queue, Node, Stack } = require('../');

const emptyQueue = new Queue();
const queue = new Queue();

const forward = new Stack();
const backward = new Stack();

const node1 = new Node(1);
const node2 = new Node(2, node1);
const node3 = new Node(4, node2);
const node4 = new Node(8, node3);

const node5 = new Node(8);
const node6 = new Node(4, node5);
const node7 = new Node(2, node6);
const node8 = new Node(1, node7);

forward.top = node4;
backward.top = node8;

queue.forward = forward;
queue.backward = backward;

queue.front = forward.top;
queue.back = backward.top;

describe('Queue', () => {

  test('handles isEmpty check', () => {
    expect(queue.isEmpty()).toEqual(false);
    expect(emptyQueue.isEmpty()).toEqual(true);
  });

  test('handles dequeue from empty queue', () => {
    expect(() => emptyQueue.dequeue()).toThrow('ERROR: Cannot dequeue from an empty Queue');
  });

  test('handles dequeue from non-empty queue', () => {
    const node = queue.dequeue();
    expect(node.val).toEqual(8);
  });

  test('handles peek', () => {
    let val = queue.peek();
    expect(val).toEqual(4);
  });

  test('handles enqueue onto empty queue', () => {
    emptyQueue.enqueue(16);
    expect(emptyQueue.back.val).toEqual(16);
    expect(emptyQueue.front.val).toEqual(16);
  });

  test('handles push onto non-empty queue', () => {
    queue.enqueue(16);
    expect(queue.back.val).toEqual(16);
  });

});
