function isPrime ( n ) {
    if ( n < 2 ) {
        return false;
    }
    for ( var i = 2; i < n; i++ ) {
        if ( !(n % i) ) {
            return false;
        }
    }
    return true;
}
function nthPrime ( n ) {
    var count = 0;
    var current = 1;
    for ( ;count < n; ) {
        current++;
        if ( isPrime( current ) ) {
            count++;
        }
    }
    return current;
}

function PrimeMover(num) { 
  var i = 1;
  var c = 0;
  var arr = [];
  while (c < num){
    i++;
    if (isPrime(i)){
      arr.push(i);
      c++;
    }
  }
  return arr[num-1];
}

function isPrime(num){
  
  for (i=2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

var fib3 = (function(){
    var memo = {};
    return function(n) {
        if (memo[n]) {return memo[n];}
        return memo[n] = (n <= 2) ? 1 : fib3(n-2) + fib3(n-1);
    };
})();

var fib2 = _.memoize(function(n) {
  return n < 2 ? n : fib2(n - 1) + fib2(n - 2);
});