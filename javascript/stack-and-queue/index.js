'use strict';

const { Node } = require('./linked-list');
const { Stack } = require('./stack');
const { Queue } = require('./queue');

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(3);

let emptyStack = new Stack();

console.log(stack.peek(), emptyStack.peek());

module.exports = { Node, Stack, Queue };
