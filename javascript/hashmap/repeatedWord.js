'use strict';

const HashMap = require('./hashmap');

function repeatedWord(str) {
  const map = new HashMap();
  const words = str.match(/\w+/g);
  for (let word of words) {
    let lowercase = word.toLowerCase();
    if(map.get(lowercase)) {
      return lowercase;
    }
    map.set(lowercase, 1);
  }
  return null;
}

module.exports = repeatedWord;
