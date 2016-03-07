var reverse = function (string) {
  var rev = '';
  for (var i = string.length - 1; i >= 0; i--) {
    rev += string[i];
  }
  return rev
}