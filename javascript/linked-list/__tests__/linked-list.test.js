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
    list.append(3);
    expect(list.head).toBeInstanceOf(Node);
    expect(list.head.val).toEqual(3);
  });

  it('handles insertion at the end non-empty list', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    expect(list.head.next).toBeInstanceOf(Node);
    expect(list.head.next.val).toEqual(1);
  });

  it('handles insertion before index', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    list.insertBefore(1, 7);
    expect(list.head.next.val).toEqual(7);
    expect(list.head.next.next.val).toEqual(1);
  });

  it('handles insertion before first node', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    list.insertBefore(3, 7);
    expect(list.head.val).toEqual(7);
    expect(list.head.next.val).toEqual(3);
  });

  it('handles insertion after index', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    list.insertAfter(3, 7);
    expect(list.head.val).toEqual(3);
    expect(list.head.next.val).toEqual(7);
  });

  it('handles insertion after last node', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    list.insertAfter(1, 7);
    expect(list.head.next.val).toEqual(1);
    expect(list.head.next.next.val).toEqual(7);
  });

  it('points to the first node as "head"', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    expect(list.head).toBeInstanceOf(Node);
    expect(list.head.val).toEqual(3);
  });

  it('returns true on found element', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    expect(list.includes(3)).toEqual(true);
  });

  it('returns false on unfound element', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    expect(list.includes(2)).toEqual(false);
  });

  it('returns a string representation of the list', () => {
    let list = new LinkedList();
    list.append(3);
    list.append(1);
    list.append(5);
    list.append('hello');
    list.append('last');
    let str = list.toString();
    console.log(str);
    expect(str).toEqual('{3} -> {1} -> {5} -> {hello} -> {last} -> NULL');
  });
});
