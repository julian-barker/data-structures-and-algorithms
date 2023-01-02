'use strict';

function insertionSort(arr) {
  console.log('sorting...');
  for(let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while((curr < arr[j]) && (j >= 0)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
}

const arr = [8,4,23,42,16,15];
console.log(arr);
insertionSort(arr);
console.log(arr);

module.exports = insertionSort;
