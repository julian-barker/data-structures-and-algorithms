# Challenge Summary

- This challenge was to implement a pseudoQueue with the conventional methods:
  - Queue: isEmpty, enqueue, dequeue, peek

- Using only two stacks, as opposed to a ground-up implementation.

## Whiteboard Process

- No whiteboard for this challenge.

## Approach & Efficiency

- Each enqueue and dequeue on the queue performs a push in \*O(1) on either the forward or backward Stack, and then an \*O(n) operation to recreate the other Stack.  *time AND space
- As far as I can figure, there isn't a way to keep all operations in constant time and space.

### Queue

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| isEmpty | O(1) | O(1) |
| enqueue | O(n) | O(n) |
| dequeue | O(n) | O(n) |
| peek | O(1) | O(1) |

## Solution

- All new implementation code exists in pseudoQueue.js.
- Existing stack implementation brought over from the stack-and-queue lab
- Run the tests by running `npm test pseudoQueue`
