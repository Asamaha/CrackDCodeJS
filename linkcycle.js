//a function that checks if a linkedlist contains a cycle

var Node = function(value) {
  return {value: value, next: null}
}

var linkCycle = function(list) {
  var slow = list;
  var fast = list
  var pause = true;

  while(fast === fast.next) {
    if(fast === slow) {
      return true;
    }
    slow = pause ? slow : slow.next;
    pause = !pause;
  }
  return false
}