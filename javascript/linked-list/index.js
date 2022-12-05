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

  append(value) {
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

  insertBefore(val, newVal) {
    if(!this.head) {
      throw 'ERROR: empty list - use the append method instead';
    }
    if(this.head.val === val) {
      let node = new Node(newVal, this.head);
      this.head = node;
      return;
    }
    let curr = this.head;
    while(curr.next) {
      if(curr.next.val === val) {
        let node = new Node(newVal, curr.next);
        curr.next = node;
        return;
      }
      curr = curr.next;
    }
    throw 'ERROR: no node exists with the given value';
  }

  insertAfter(val, newVal) {
    if(!this.head) {
      throw 'ERROR: empty list - use the append method instead';
    }
    let curr = this.head;
    while(curr) {
      if(curr.val === val) {
        let node = new Node(newVal, curr.next);
        curr.next = node;
        return;
      }
      curr = curr.next;
    }
    throw 'ERROR: no node exists with the given value';
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
