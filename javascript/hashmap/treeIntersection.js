
const HashMap = require('.');

function treeIntersection(tree1, tree2) {
  const results = [];
  const map = new HashMap();
  let current1 = tree1.root;
  let current2 = tree2.root;
  if (!current1 || !current2) {
    return results;
  }

  function traverse1(node) {
    map.set(node.value, 1);
    if (node.left) {
      traverse1(node.left);
    }
    if (node.right) {
      traverse1(node.right);
    }
  }

  function traverse2(node) {
    if(map.has(node.value)) {
      results.push(node.value);
    }
    if (node.left) {
      traverse2(node.left);
    }
    if (node.right) {
      traverse2(node.right);
    }
  }
  traverse1(current1);
  traverse2(current2);

  return results;
}

module.exports = treeIntersection;
