# Challenge Summary

- This challenge was to implement a stack and a queue with the conventional methods:

  - Stack: isEmpty, push, pop, peek
  - Queue: isEmpty, enqueue, dequeue, peek

## Whiteboard Process

- No whiteboard for this challenge.

## Approach & Efficiency

- For both stacks and queues, all operations will run in O(1) time and space since we only access or make changes at the point in the linked-list to which we have a direct reference. We just move pointers around at that the top (stack) or the front/back (queue).

### Stack

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| isEmpty | O(1) | O(1) |
| push | O(1) | O(1) |
| pop | O(1) | O(1) |
| peek | O(1) | O(1) |

### Queue

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| isEmpty | O(1) | O(1) |
| enqueue | O(1) | O(1) |
| dequeue | O(1) | O(1) |
| peek | O(1) | O(1) |

## Solution

- All of the implementation code exists in stack.js and queue.js
- Run the tests by running `npm test queue` or `npm test stack`
