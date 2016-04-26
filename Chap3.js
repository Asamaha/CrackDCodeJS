// Describe how you could use a single array to implement three stacks.
//Time and space is constant O(1)
var TripleStack = function() {
  this.array = [];
  this.lengths = [0,0,0];
}

TripleStack.prototype.getLength = function(stack) {
  // body...
  return this.lengths[stack-1];
};

TripleStack.prototype.push = function(stack, value) {
  // body...
  var index = this.getLength(stack) * 3 + stack - 1;
  this.array[index] = value;
  this.lengths[stack-1]++;
};

TripleStack.prototype.pop = function(stack) {
  // body...
  var index = this.getLength(stack) * 3 + stack - 1;
  var length = this.getLength(stack);
  var value;
  if(length > 0) {
    value = this.array[index];
    this.array[index] = undefined;
    this.lengths[stack-1]--
  }
  return value;
};

TripleStack.prototype.peek = function(stack) {
  // body...
  var index = this.getLength(stack) * 3 + stack - 1;
  var len = this.getLength(stack), value;
  if(length > 0) {
    value = this.array[index];
  }
  return value;
};

TripleStack.prototype.isEmpty = function(stack) {
  // body...
  return this.getLength(stack) === 0;
};

// How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

var MinStack = function() {
  this.stack = [];
}

MinStack.prototype.push = function(value) {
  // body...
  var min = this.min();
  this.stack.push({
    value: value,
    min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
  });
};

MinStack.prototype.pop = function() {
  // body...
  if(!this.isEmpty()) {
    var item = this.stack.pop();
    return item.value;
  }
};

MinStack.prototype.peek = function() {
  // body...
  if(!this.isEmpty()) {
    var item = this.stack.[this._stack.length - 1];
    return item.value;
  }
};

MinStack.prototype.min = function() {
  // body...
  if(!this.isEmpty()) {
    var item = this.stack.[this._stack.length - 1];
    return item.min;
  }
};

MinStack.prototype.isEmpty = function() {
  // body...
  return this.stack.length === 0;
};

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// There- fore, in real life, we would likely start a new stack when the previous stack 
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 
// SetOf- Stacks should be composed of several stacks, and should create a new stack once 
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave 
// identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

var StackOfStacks = function(maxsize) {
  this.stacks = [[]]
  this.max = maxsize;
}

StackOfStacks.prototype.push = function(value) {
  // body...
  if (this.stacks[this.stacks.length - 1].length >= this.max) {
    this.stacks.push([]);
  }
  this.stacks[this.stacks.length - 1].push(value);
};

StackOfStacks.prototype.pop = function(value) {
  // body...
  var value = this.stacks[this.stacks.length - 1].pop();
  if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop();
  }
  return value;
};

StackOfStacks.prototype.popAt = function(number) {
  // body...
  if (number < 1 || number > this.stacks.length) {
    throw new Error('stack number is invalid');
  }
  if (number === this.stacks.length) {
    return this.pop();
  }
  var stack = this.stacks[number - 1],
    value = stack.pop(),
    tempStack = [],
    nextStack;
  if (number < this.stacks.length) {
    for (var i = number; i < this.stacks.length; ++i) {
      nextStack = this.stacks[i];
      while (nextStack.length > 0) {
        tempStack.push(nextStack.pop());
      }
      stack.push(tempStack.pop());
      while (tempStack.length > 0) {
        nextStack.push(tempStack.pop());
      }
      stack = nextStack;
    }
  }
  if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop();
  }
  return value;
};

// Implement a MyQueue class which implements a queue using two stacks.
var MyQueue = function() {
  this.inbox = [];
  this.outbox = [];
}
MyQueue.prototype.enqueue = function(val) {
  // body...
  this.inbox.push(val)
};

MyQueue.prototype.dequeue = function() {
  // body...
  if (this.outbox.length === 0 && this.inbox.length === 0) {
    throw new Error('queue is empty');
  }
  if (this.outbox === 0) {
    while(this.inbox > 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

/*In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of 
different sizes which can slide onto any tower. 
The puzzle starts with disks sorted in ascending order of size from top to bottom 
(e.g., each disk sits on top of an even larger one). You have the following constraints:
(A) Only one disk can be moved at a time.
(B) A disk is slid o  the top of one rod onto the next rod.
(C) A disk can only be placed on top of a larger disk.
Write a program to move the disks from the  rst rod to the last using Stacks.
*/

/*write a program to sort a stack in ascending order. 
You should not make any assump- tions about how the stack is implemented. 
The following are the only functions that should be used to write this 
program: push | pop | peek | isEmpty.*/
function sortStack(stack) {
  var temp = [];
  temp.push(stack.pop());
  while (!isEmpty(stack)) {
    var curr = stack.pop(),
      count = 0;

    while (!isEmpty(temp) && curr < peek(temp)) {
      stack.push(temp.pop());
      ++count;
    }
    temp.push(curr);
    for (var i = 0; i < count; ++i) {
      temp.push(stack.pop());
    }
  }

  while (!isEmpty(temp)) {
    stack.push(temp.pop());
  }

  return stack;
}

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmpty(stack) {
  return stack.length === 0;
}






