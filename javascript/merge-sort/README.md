# Code Challenge 26

## Insertion Sort

Insertion sort is a performant sorting algorithm that iteratively sorts subsections of an unsorted series and then marges the sorted subsections until the entire series is sorted..

### Pseudocode

The below pseudocode demonstrates the implementation of this algorithm.

```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Walkthrough

Let's explore this algorithm implementation by walking through an example array.

Input: `[8, 4, 23, 42, 16, 15]`

- In the first step, our array length is greater than 1.
  - We set our midpoint to be index 3.
  - Assign the subarray from 0 to 3 to a variable called left. (`[8, 4, 23]`)
  - Assign the subarray from 3 to the end of the array to a variable called right. (`[42, 16, 15]`)
  - pass left and right separately into the sort function.
    - For the left side, our array length is 3 (greater than 1)
      - We set our midpoint to be index 1.
      - Assign the subarray from 0 to 1 to a variable called left. (`[8]`)
      - Assign the subarray from 1 to the end of the array to a variable called right. (`[4, 23]`)
      - pass left and right separately into the sort function.
        - For the left side, our array length is 1 (greater than 1)
          - Return the input
        - For the right side, our array length is 2 (greater than 1)
          - We set our midpoint to be index 1.
          - Assign the subarray from 0 to 1 to a variable called left. (`[4]`)
          - Assign the subarray from 1 to the end of the array to a variable called right. (`[23]`)
          - pass left and right separately into the sort function.
          - Both sides return the sorted arrays, and we merge them by iteratively pushing the smaller of the two elements that are next in line in the sorted arrays
          - In this case, we push `4`, then `23`
      - Now we merge again (`[8]` and `[4, 23]`), pushing `4`, then `8`, then `23`
  - We skipped the step-by step on the right side of the first step, but assuming that's completed, we now merge our two sides again (`[4, 8, 23]`, `[15, 16, 42]`). We push `4`, then `8`, then `15`, then `16`, then `23`, then finally `42`.
- Our end result is `[4, 8, 15, 16, 23, 42]`
- The array is now sorted!!!  🎉🎉🎉

** Note: My description uses push, which would be to return anew array, although the pseudo code I referenced modifies the input array. My code implementation returns a new array, but to sort in place, you would just reassign the values of the input array at the proper indices as you are merging, instead of pushing values into a new array.
