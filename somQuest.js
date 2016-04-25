function isPrime(n) {
  for(var i = 2; i < Math.sqrt(n); i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return n > 0;
};


function fibonacci(n) {
  if(n <= 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};

function chefCurry(steph) {
  if(typeof steph !== "function") {
    throw error "curry function not given"
  }

  return function curry() {
    var arg = Array.prototype.slice.call(arguments);
    if(arg.length < steph.length) {
      return function() {
        curry.apply(null, arg.concat(arg))
      }
    }
    return steph.apply(null, arg)
  }
}

function GCD(a, b) {
  if(b === 0) {
    return a
  }
  return GCD(b, a%b)
}