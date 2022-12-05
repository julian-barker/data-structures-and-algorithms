'use strict';

// Require our linked list implementation
const { LinkedList, Node } = require('../index');

describe('Linked List', () => {
  it('handles instatiation', () => {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
  });

  it('handles insertion into empty list', () => {
    let list = new LinkedList();
    list.insert(3);
    expect(list.head).toBeInstanceOf(Node);
    expect(list.head.val).toEqual(3);
  });

  it('handles insertion into non-empty list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    expect(list.head.next).toBeInstanceOf(Node);
    expect(list.head.next.val).toEqual(1);
  });

  it('points to the first node as "head"', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    expect(list.head).toBeInstanceOf(Node);
    expect(list.head.val).toEqual(3);
  });

  it('returns true on found element', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    expect(list.includes(3)).toEqual(true);
  });

  it('returns false on unfound element', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    expect(list.includes(2)).toEqual(false);
  });

  it('returns a string representation of the list', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(1);
    list.insert(5);
    list.insert('hello');
    list.insert('last');
    let str = list.toString();
    console.log(str);
    expect(str).toEqual('{3} -> {1} -> {5} -> {hello} -> {last} -> NULL');
  });
});
