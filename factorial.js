//This func below will run in constant time

var factorial = function (n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}