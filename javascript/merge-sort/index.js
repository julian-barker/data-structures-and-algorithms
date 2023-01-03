'use strict';

function mergeSort(arr) {
  // console.log('sorting...', arr);
  if(arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  let i = 0;
  let j = 0;
  const sorted = [];
  while (left[i] || right[j]) {
    if(!left[i]) {
      sorted.push(right[j]);
      j++;
    } else if(!right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      if (right[j] < left[i]) {
        sorted.push(right[j]);
        j++;
      } else {
        sorted.push(left[i]);
        i++;
      }
    }
  }
  return sorted;
}

const arr = [8,4,23,42,16,15];
console.log(arr);
const sorted = mergeSort(arr);
console.log(sorted);

module.exports = mergeSort;
