//return dups in an array
//you can also use set

//using brute force
var method1 = function(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++) {
      if(i !== j && a[i] === a[j]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

//using hashtable
var method2 = function (arr) {
  var count = [];
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(count[arr[i]] === undefined) {
      count[arr[i]] = 1
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}