# Challenge Summary

- This challenge was to implement a singly linked list with methods for insertion and search.

## Whiteboard Process

- No whiteboard for this lab

## Approach & Efficiency

- The central mechanism for most implementation details is using a while loop to iterate through the nodes of the linked list until a certain criteria is met, or null is encountered. At that point, either return, throw an error, or perform some action.

- For kth from the end, I simply iterated twice. The first iteration determines the length of the list, and the second iterates a counter until it reaches the target index, determined from the length - 1 - k.

## Solution

- All of the implementation code exists in index.js
- Run the tests by running `npm test linked-list`
