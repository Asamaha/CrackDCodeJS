var fs = require('fs');

var dictionary = '/usr/share/dict/words'

var words = fs.readFileSync(dictionary, 'utf8').split('\n').sort();


var binarySearch = function (array, target) {

  var sub = function (low, high) {
    if (high === low) { return null; }

    var mid = Math.floor((high - low) / 2) + low;

    if (array[mid] === target) {
      return mid;

    } else if (array[mid] > target) {
      return sub(low, mid);
    } else {
      return sub(mid, high);
    }
  };

  return sub(0, array.length);
};

var wordCheck = function(word) {
  word = word.toLowerCase()
  var check = binarySearch(words, word);
  if(check !== -1) {
    return word + 'is spelled correctly'
  }
}