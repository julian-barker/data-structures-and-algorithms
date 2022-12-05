'use strict';

class Node {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  includes(key) {
    let curr = this.head;
    while (curr !== null) {
      if(curr.val === key) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  toString() {
    let str = '';
    let curr = this.head;
    while(curr !== null) {
      str += `{${String(curr.val)}} -> `;
      curr = curr.next;
    }
    str += 'NULL';

    return str;
  }
}

module.exports = { LinkedList, Node };
