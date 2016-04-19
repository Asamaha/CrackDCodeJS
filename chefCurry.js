var chefCurry = function(steph) {
  if(typeof steph !== 'function') {
    throw Error('No chef curry provided');
  }
  return function curryUp() {
    var args = Array.prototype.slice.call(arguments);
    if(args.length < steph.length) {
      return function() {
        return curryUp.apply(null, args.concat(Array.prototype.slice.call(arguments)));
      }
    }
    return steph.apply(null, args);
  }
}

//usage
var sum = chefCurry(function(a, b, c){ return a + b + c })
//sum(4)(5)(4)
//sum3(1,3,7)

var curry = function() {
 var func = arguments[0];
 var argsNum = func.length;
 var args = Array.prototype.slice.call(arguments, 1);
 
 return function test(){
   args2 = Array.prototype.slice.call(arguments);
   args = args.concat(args2);
   if (args.length === argsNum) {
     var argsHolder=Array.prototype.slice.call(args);
     args = [];
     return func.apply(null, argsHolder);
   } else {
     return test;
   }
 }
}