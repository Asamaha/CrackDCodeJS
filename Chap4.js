/*Implement a function to check if a tree is balanced. For the purposes of this question, 
a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from 
the root by more than one.*/

function BinaryTreeNode(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

//find the min dept
function minDepth(node) {
  if(typeof node === "undefined") {
    return 0
  }
  return 1 + Math.min(minDepth(node.left), minDepth(node.right))
}
//find max
function maxDepth(node) {
  if(typeof node === "undefined") {
    return 0
  }
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right))
}
//check balance
function isBinaryBalance(root) {
  if (typeof root === "undefined") {
    return undefined;
  }
  return maxDepth(root) - minDepth(root) <= 1
}

// Given a directed graph, design an algorithm to  nd 
// out whether there is a route be- tween two nodes.
function isConnectedDFS(graph, source, target) {
  return dfs(graph, new Set(), source, target);
}

function dfs(graph, discovered, source, target) {
  if (source === target) {
    return true;
  }
  discovered.add(source);
  for (var neighbour of graph[source]) {
    if (!discovered.has(neighbour)) {
      if (dfs(graph, discovered, neighbour, target)) {
        return true;
      }
    }
  }
  return false;
}

// Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height.
function makeBalancedTree(values) {
  var tree = new Tree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1);
  }
  return tree;
}

function add(tree, values, start, end) {
  if (start === end) {
    tree.add(values[start]);
  }
  else if (start < end) {
    var mid = start + Math.floor((end - start) / 2);
    tree.add(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
}

// Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth 
// (eg, if you have a tree with depth D, you’ll have D linked lists).

function listTreeByDepthOrder(tree) {
  var lists = [];
  addToList(lists, tree.root, 0);
  return lists;
}

function addToList(lists, node, depth) {
  if (node) {
    if (!lists[depth]) {
      lists[depth] = new LinkedList();
    }

    lists[depth].append(node.val);

    addToList(lists, node.left, depth + 1);
    addToList(lists, node.right, depth + 1);
  }
}

//Implemen a function to check if a binary tree is a binary search tree
function isValid(tree) {
  if(!tree) {
    throw new Error("invalid")
  }
  return isValidBST(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValidBST(node, min, max) {
  if (node) {
    if (node.val < min || node.val > max) {
      return false;
    }
    return isValidBST(node.left, min, node.val) &&
      isValidBST(node.right, node.val, max);
  }
  return true;
}

// Write an algorithm to  nd the ‘next’ node (e.g., in-order successor) of a given node in a binary search tree where each node has a link to its parent.
function findSuccessor(node) {
  if (!node) {
    throw new Error('node cannot be null');
  }

  var snode;
  if (node.right) {
    snode = node.right;
    while (snode.left) {
      snode = snode.left;
    }
    return snode.val;
  }
  else {
    // go up until we find left path
    snode = node;
    while (snode.parent && snode !== snode.parent.left) {
      snode = snode.parent;
    }
    return snode.parent ? snode.parent.val : undefined;
  }
}









