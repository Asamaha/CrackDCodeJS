// Describe how you could use a single array to implement three stacks.

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