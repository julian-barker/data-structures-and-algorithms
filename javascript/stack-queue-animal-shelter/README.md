# Challenge Summary

- This challenge was to implement a FIFO animal shelter with the standard queue methods.
  - Queue: isEmpty, enqueue, dequeue, peek

- The twist is that the dequeue specifies the type of animal, and we must return the first animal of that type.

## Whiteboard Process

- [whitebaord](./assets/stack-queue-animal-shelter.png)

## Approach & Efficiency

- Enqueue - same as a normal queue, except we validate the input
- Dequeue - we iterate through thequeue and remove the first node matching the preference specified. If no preference is specified, we dequeue as normal

### AnimalShelter

| Function | Time Complexity | Space Complexity |
| --- | --- | --- |
| isEmpty | O(1) | O(1) |
| enqueue | O(1) | O(1) |
| dequeue | O(n) | O(1) |
| peek | O(1) | O(1) |

## Solution

- All new implementation code exists in index.js.
- Run the tests by running `npm test shelter`
