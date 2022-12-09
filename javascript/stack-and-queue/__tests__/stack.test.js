'use strict';

// Require our linked list implementation
const { Stack, Node } = require('../');

const emptyStack = new Stack();
const stack = new Stack();

const node1 = new Node(1);
const node2 = new Node(2, node1);
const node3 = new Node(4, node2);
const node4 = new Node(8, node3);

stack.top = node4;
console.log(stack);

describe('Stack', () => {

  test('handles isEmpty check', () => {
    expect(stack.isEmpty()).toEqual(false);
    expect(emptyStack.isEmpty()).toEqual(true);
  });

  test('handles pop from empty stack', () => {
    expect(() => emptyStack.pop()).toThrow('ERROR: cannot pop from an empty list');
  });

  test('handles pop from non-empty stack', () => {
    const popped = stack.pop();
    expect(popped.val).toEqual(8);
  });

  test('handles peek', () => {
    let peeked = stack.peek();
    expect(peeked).toEqual(4);
  });

  test('handles push onto empty stack', () => {
    emptyStack.push(16);
    expect(emptyStack.top.val).toEqual(16);
  });

  test('handles push onto non-empty stack', () => {
    stack.push(16);
    expect(stack.top.val).toEqual(16);
  });

});
