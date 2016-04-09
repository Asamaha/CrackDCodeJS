//find the non repeating element in an array

//Using XOR
//This solution will only work if the repeated numbers are even
var nonDuplicate = function (array) {
  var first = this[0];

  for(var i = 0; i < array.length; i++) {
    first ^= array[i];
  }
  return first;
}

// using letter count
var nonRepeat = function (array) {

}