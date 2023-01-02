# Code Challenge 26

## Insertion Sort

Insertion sort is a simple sorting algorithm that iteratively inserts elements of an unsorted series into the correct position in a sorted series.

### Pseudocode

The below pseudocode demonstrates the implementation of this algorithm.

![insertion-pseudo](../images/insertion-sort.png)

### Walkthrough

Let's explore this algorithm implementation by walking through an example array.

Input: `[8, 4, 23, 42, 16, 15]`

1. The first element is always sorted, so we start with the second element, which is 4.

    - We can see that 4 is not sorted relative to 8, so we swap those two numbers.
    - Now 4 and 8 are sorted, and we can move to index 2 of the array.

2. At index 2, we compare 23 to the sorted portion of the array.

    - Indeed, we see that 23 is larger than 8 and is therfore sorted.
    - We move to index 3 of the array.

3. At index 3, we compare 42 to the sorted sub-array.

    - Indeed, we see that 23 is larger than 8 and is therefore sorted.
    - We move to index 4 of the array.

4. At index 4, we compare 16 to the sorted sub-array.

    - 16 is not sorted relative to the sub-array, so we swap it with 42, resulting in `[4, 8, 23, 16, 42, 15]`
    - 16 is still in the wrong position, so we swap it with 23, resulting in `[4, 8, 16, 23, 42, 15]`
    - Now 16 is in the correct position, so we move to index 5 of the array.

5. At index 5, we compare 15 to the sorted sub-array.

    - 15 is not sorted relative to the sub-array, so we swap it with 42, resulting in `[4, 8, 16, 23, 15, 42]`
    - 15 is still in the wrong position, so we swap it with 23, resulting in `[4, 8, 16, 15, 23, 42]`
    - 15 is still in the wrong position, so we swap it with 16, resulting in `[4, 8, 15, 16, 23, 42]`
    - Now 15 is in the correct position, and we are already at the last index of the array, so we are complete.

6. The array is now sorted!!!  🎉🎉🎉
