'use strict';

const { Node, BinaryTree, BST } = require('../index');

const tree = new BinaryTree();
tree.root = new Node(1, new Node(2, new Node(3), new Node(4)), new Node(5, new Node(6), new Node(7)));

const bst = new BST();
bst.root = new Node(4, new Node(2, new Node(1)), new Node(6, new Node(5), new Node(7)));

describe('Binary Tree works', () => {
  test('binary tree handles pre-order traversal', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    expect(tree.preOrder()).toEqual(arr);
  });

  test('binary tree handles in-order traversal', () => {
    let arr = [3, 2, 4, 1, 6, 5, 7];
    expect(tree.inOrder()).toEqual(arr);
  });

  test('binary tree handles post-order traversal', () => {
    let arr = [3, 4, 2, 6, 7, 5, 1];
    expect(tree.postOrder()).toEqual(arr);
  });
});

describe('Binary Search Tree works', () => {
  test('bst handles adding new nodes', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    bst.add(3);
    expect(bst.inOrder()).toEqual(arr);
  });

  test('bst handles searching for a value', () => {
    expect(bst.contains(5)).toEqual(true);
    expect(bst.contains(8)).toEqual(false);
  });
});

