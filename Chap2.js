// Write code to remove duplicates from an unsorted linked list.
function deletDup(node) {
  // body...
  var seen = new Set()

  //add head
  seen.add(node.val)
  while (node.next) {
    if(seen.has(node.next.val)) {
      //assuming the node has been seen, skip it
      node.next = node.next.next;
    } else {
      seen.add(node.next.val);
      node = node.next
    }
  }
  return node;
}

// Implement an algorithm to find the nth to last element of a singly linked list.

function kthToLastwo(list, k) {
  if (list === null  || n < 1) {
    return null
  }
  var p1 = list;
  var p2 = list;
  for (var i = 0; i < n-1; i++) {
    if(p2 === null) {
      return null
    }
    p2 = p2.next;
  }
  while(p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1.val;
}

// Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node.
// Time: 0(1)
//Space: 0(1)
function deleteNode(node) {
  if(node === null || node.next === null) {
    return false;
  }
  node.val = node.next.val;
  node.next = node.next.next;
}

// You have two numbers represented by a linked list, where each node contains a sin- gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

