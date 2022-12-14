'use strict';

const { Stack } = require('./stack');

function validateBrackets(str) {
  if(str.length === 0) {
    return true;
  }
  const stack = new Stack();
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closed = Object.values(brackets);
  for (let char of str) {
    if(brackets[char]) {
      stack.push(char);
      console.log('pushing: ', char);
    } else if(closed.includes(char)) {
      let popped = stack.pop();
      console.log('comparing: ', char, popped);
      if(!popped || brackets[popped] !== char) {
        return false;
      }
    }
  }
  console.log('reached end', stack);
  if(stack.top) {
    return false;
  }
  return true;
}


module.exports = validateBrackets;
