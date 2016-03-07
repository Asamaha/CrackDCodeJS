// this function is runs in 0(sqrt(n)) time

var isPrime = function (num) {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}