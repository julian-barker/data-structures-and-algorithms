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



});
