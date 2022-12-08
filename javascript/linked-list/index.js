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

  findAtIndex(idx) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      console.log(`count = ${count}`, `idx = ${idx}`, `val = ${curr}`);
      if (count === idx) {
        return curr.val;
      }
      count++;
    }
    throw 'ERROR: provided index does not exist in list';
  }

  findFromEnd(k) {
    if (k < 0) {
      throw 'ERROR: provided index does not exist in list';
    }
    let curr = this.head;
    let len = 0;
    while (curr) {
      curr = curr.next;
      len++;
    }
    let target = len - 1 - k;
    console.log('k = ', k);
    console.log('target = ', target);
    if (target < 0) {
      throw 'ERROR: provided index does not exist in list';
    }
    curr = this.head;
    let count = 0;
    while (curr) {
      if (count === target) {
        return curr.val;
      }
      curr = curr.next;
      count++;
    }
    throw 'ERROR: provided index does not exist in list';
  }

  // findFromEnd(idx) {
  //   let fast = this.head;
  //   let slow = this.head;
  //   let len = 0;
  //   while (fast) {
  //     if (count === target) {
  //       return curr.val;
  //     }
  //     fast = fast.next;
  //     if (fast % 2 === 0) {
  //       slow = slow.next;
  //     }
  //   }
  //   throw 'ERROR: provided index does not exist in list';
  // }

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

function zipLists(list1, list2) {
  let p1 = list1.head;
  let p2 = list2.head;

  let result = new LinkedList();
  let count = 0;
  if(p1) {
    result.head = p1;
    p1 = p1.next;
    count++;
  } else if(p2) {
    result.head = p2;
    p2 = p2.next;
    count += 2;
  } else {
    return result;
  }

  let current = result.head;

  while (p1 && p2) {
    if (count % 2 === 0) {
      current.next = p1;
      current = current.next;
      p1 = p1.next;
      console.log('adding p1');
    } else {
      current.next = p2;
      current = current.next;
      p2 = p2.next;
      console.log('adding p2');
    }
    count++;
  }

  let remaining = p1 ? p1 : p2;
  while (remaining) {
    current.next = remaining;
    current = current.next;
    remaining = remaining.next;
  }

  return result;
}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.append(3);
list1.append(1);
list1.append(8);
list2.append(2);
list2.append(4);
list2.append(5);
list2.append(7);
list2.append(10);

let str1 = list1.toString();
let str2 = list2.toString();
console.log('----- list 1: ', str1);
console.log('----- list 2: ', str2);
let str3 = zipLists(list1, list2).toString();
console.log('----- result: ', str3);

module.exports = { LinkedList, Node, zipLists };
