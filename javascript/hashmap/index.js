'use strict';

class HashMap {
  constructor() {
    this.table = new Array(128);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (key.charCodeAt(i) * hash) % this.table.length;
    }
    return hash;
  }

  set(key, val) {
    let hash = this.hash(key);
    if(!this.table[hash]) {
      this.table[hash] = {};
    }
    this.table[hash][key] = val;
  }

  get(key) {
    let hash = this.hash(key);
    let bucket = this.table[hash];
    if(bucket) {
      return bucket[key];
    }
  }

  has(key) {
    if(this.get(key) === undefined) {
      return false;
    }
    return true;
  }

  keys() {
    const keys = this.table.reduce((acc, bucket) => {
      if(bucket) {
        return acc.concat(Object.keys(bucket));
      }
      return acc;
    });
    return keys;
  }

}

module.exports = HashMap;
