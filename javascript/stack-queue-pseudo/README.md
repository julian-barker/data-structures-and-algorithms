# Challenge Summary

- This challenge was to implement a stack and a queue with the conventional methods:

  - Stack: isEmpty, push, pop, peek
  - Queue: isEmpty, enqueue, dequeue, peek

## Whiteboard Process

- No whiteboard for this challenge.

## Approach & Efficiency

- Each enqueue and dequeue on the queue performs a push in O(1) on either the forward or backward Stack, and then on O(n) operation to recreate the other Stack.

### Queue

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| isEmpty | O(1) | O(1) |
| enqueue | O(n) | O(n) |
| dequeue | O(n) | O(n) |
| peek | O(1) | O(1) |

## Solution

- All of the implementation code exists in stack.js and queue.js
- Run the tests by running `npm test queue` or `npm test stack`
