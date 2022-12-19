'use strict';

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let output = [];
    let dfs = (node) => {
      if (!node) {
        return;
      }
      output.push(node.val);
      dfs(node.left);
      dfs(node.right);
    };
    dfs(this.root);
    return output;
  }

  inOrder() {
    let output = [];
    let recurse = (node) => {
      if(!node) {
        return;
      }
      recurse(node.left);
      output.push(node.val);
      recurse(node.right);
    };
    recurse(this.root);
    return output;
  }

  postOrder() {
    let output = [];
    let recurse = (node) => {
      if(!node) {
        return;
      }
      recurse(node.left);
      recurse(node.right);
      output.push(node.val);
    };
    recurse(this.root);
    return output;
  }
}

class BST extends BinaryTree {
  add(value) {
    if(!this.root) {
      this.root = new Node(value);
    }
    const dfs = (node, val) => {
      if(val > node.val) {
        if(node.right) {
          dfs(node.right, val);
          return;
        }
        node.right = new Node(val);
      } else if(val < node.val) {
        if(node.left) {
          dfs(node.left, val);
          return;
        }
        node.left = new Node(val);
      }
    };
    dfs(this.root, value);
  }

  contains(value) {
    const dfs = (node, val) => {
      if(!node) {
        return false;
      }
      if(val === node.val) {
        return true;
      }
      if (val > node.val) {
        return dfs(node.right, val);
      } else if (val < node.val) {
        return dfs(node.left, val);
      }
    };
    return dfs(this.root, value);
  }

}

module.exports = { Node, BinaryTree, BST };
