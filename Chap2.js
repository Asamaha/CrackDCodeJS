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

// implement a function to check if a linked list is a palindrome
function isPalindromeReverse(list) {
  var length = getLength(list);

  if (length <= 1) {
    return true;
  }

  var node = list,
    half = Math.floor(length / 2),
    mid;
  for (var i = half; i > 0; --i) {
    mid = node;
    node = node.next;
  }

  if ((length % 2) === 1) {
    mid = node;
    node = node.next;
  }

  var tail = reverse(node, mid),
    isPalindrome = true,
    prev = null,
    next;
  // now walk from start to middle and end to middle comparing values
  node = list;
  for (var i = half; i > 0; --i) {
    isPalindrome = isPalindrome && node.val === tail.val;
    next = tail.next;
    tail.next = prev;
    prev = tail;
    tail = next;
    node = node.next;
  }

  return isPalindrome;
}

function reverse(node, end) {
  var prev = end,
    next;
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}


//Given two linked list, determine if the two lists intersect
function doIntersect(list1, list2) {
  let len1 = getLength(list1),
    len2 = getLength(list2);

  list1 = skip(list1, len1 - len2);
  list2 = skip(list2, len2 - len1);

  let node1 = list1,
    node2 = list2;
  while (node1 && node2) {
    if (node1 === node2) {
      return node1;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return undefined;
}

function skip(list, num) {
  while (num > 0) {
    list = list.next;
    --num;
  }
  return list;
}

// Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop.
function findStartOfLoop(list) {
  if (!list) {
    return null;
  }

  let slow = list,
    fast = list;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      break;
    }
  }

  if (!slow || slow !== fast) { // no loop
    return null;
  }

  slow = list;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

