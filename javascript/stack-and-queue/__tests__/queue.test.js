'use strict';

// Require our linked list implementation
const { Queue, Node } = require('../');

const emptyQueue = new Queue();
const queue = new Queue();

const node1 = new Node(1);
const node2 = new Node(2, node1);
const node3 = new Node(4, node2);
const node4 = new Node(8, node3);

queue.front = node4;
queue.back = node1;

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
