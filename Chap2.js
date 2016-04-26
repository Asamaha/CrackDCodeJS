// Write code to remove duplicates from an unsorted linked list.
function deletDup(node) {
  // body...
  //Time O(N)
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

//no buffer
function deleteDup(head) {
  var current = head;
  while(current !== null) {
    var runner = current;
    while(runner.next != null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return current;
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

// code to partition a linked list around a value x
function partition(node, x) {
  var head = node;
  var tail = node;

  while (node !== null) {
    var next = node.next;
    if(node.val < x) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;

  return head;
}

// You have two numbers represented by a linked list, where each node contains a sin- gle digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
//needs additional space 0(n)
function sumListsReverseOrder(list1, list2) {
  var head = { next: null }, // pseudo node
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum;

  while (node1 && node2) {
    sum = node1.val + node2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2; // go through whatever is remaining of the longer list
  while (node1) {
    sum = node1.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
  }

  if (carry > 0) { // check for any remaining carry
    tail.next = createNode(carry);
  }

  return head.next;
}


