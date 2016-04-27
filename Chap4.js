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
  } else {
    // go up until we find left path
    snode = node;
    while (snode.parent && snode !== snode.parent.left) {
      snode = snode.parent;
    }
    return snode.parent ? snode.parent.val : undefined;
  }
}

//Build Order: find a build order that will allow the projects to be built....
function buildOrder(projects, dependencies) {
  let adj = {},
    finished = [],
    discovered = new Set(),
    path = new Set();

  // create adjacency matrix... => is a function in es6
  projects.forEach(project => adj[project] = []);
  dependencies.forEach(edge => adj[edge[1]].push(edge[0]));
  // run topological sort
  projects.forEach(project => topologicalSort(adj, discovered, finished, path, project));

  return finished.reverse();
}

function topologicalSort(adj, discovered, finished, path, project) {
  if (discovered.has(project)) {
    return;
  }

  discovered.add(project);
  path.add(project);
  for (let neighbour of adj[project]) {
    if (path.has(neighbour)) {
      throw new Error('dependencies are cyclic');
    }

    topologicalSort(adj, discovered, finished, path, neighbour);
  }
  path.delete(project);
  finished.push(project);
}

//Firt Common Ancestors: 
function findFirstCommonAnscestor(node1, node2) {
  if (!node1 || !node2) {
    throw new Error('node1 and node2 must both be valid nodes');
  }

  var h1 = height(node1),
    h2 = height(node2);
  node1 = moveUp(node1, h1 - h2);
  node2 = moveUp(node2, h2 - h1);
  while (node1 !== node2) {
    node1 = node1.parent;
    node2 = node2.parent;
  }

  return node1.val;
}

function height(node) {
  var count = 0;
  while (node) {
    node = node.parent;
    ++count;
  }
  return count;
}

function moveUp(node, count) {
  for (var i = count; i > 0; --i) {
    node = node.parent;
  }
  return node;
}

//BST Sequences
function sequencesToCreateBST(tree) {
  if (!tree || !tree.root) {
    return null;
  }
  return sequencesRecursive(tree.root);
}

function sequencesRecursive(node) {
  if (!node) {
    return null;
  }
  else {
    let perms = permutations(sequencesRecursive(node.left), sequencesRecursive(node.right));
    if (!perms) {
      perms = [[node.val]];
    }
    else {
      perms.forEach(p => p.unshift(node.val));
    }
    return perms;
  }
}

function permutations(left, right) {
  if (!left || !right) {
    return left || right;
  }
  else {
    var perms = [];
    for (var i = 0; i < left.length; ++i) {
      for (var j = 0; j < right.length; ++j) {
        perms.push.apply(perms, permutationsRecursive([], left[i], right[j], [], 0, 0));
      }
    }
    return perms;
  }
}

function permutationsRecursive(perms, list1, list2, prefix, i, j) {
  if (i === list1.length && j === list2.length) {
    perms.push(prefix.slice(0));
  }
  else {
    if (i < list1.length) {
      prefix.push(list1[i]);
      permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
      prefix.pop();
    }

    if (j < list2.length) {
      prefix.push(list2[j]);
      permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
      prefix.pop();
    }
  }
  return perms;
}

//Check Subtree
function isSubtree(tree1, tree2) {
  if (!tree1 || !tree1.root) {
    throw new Error('trees1 must be valid non-empty trees');
  }
  if (!tree2 || !tree2.root) {
    return true;
  }
  return findRoot(tree1.root, tree2.root);
}

function findRoot(node1, node2) {
  if (!node1 || !node2) {
    return false;
  }
  else if (node1.val === node2.val && sameTree(node1, node2)) {
    return true;
  }
  else {
    return findRoot(node1.left, node2) || findRoot(node1.right, node2);
  }
}

function sameTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  else if (!node1 && node2 || node1 && !node2) {
    return false;
  }
  else if (node1.val === node2.val) {
    return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
  }
  else {
    return false;
  }
}

//Path with sum tr
function findPathWithSum(tree, value) {
  if (!tree || !tree.root) {
    throw new Error('tree must be valid and non-empty');
  }

  return findPathWithSumRecurse([], tree.root, value);
}

function findPathWithSumRecurse(path, node, value) {
  let count = 0;
  if (node) {
    path.push(node.val);
    let sum = 0;
    for (let i = path.length - 1; i >= 0; --i) {
      sum += path[i];
      if (sum === value) {
        ++count;
      }
    }
    count += findPathWithSumRecurse(path, node.left, value) +
      findPathWithSumRecurse(path, node.right, value);
    path.pop();
  }
  return count;
}







