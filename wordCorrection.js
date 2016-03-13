var fs = require('fs');
var dictionary = '/usr/share/dict/words';
var prompt = require('prompt');
var words = fs.readFileSync(dictionary, 'utf8').split('\n').sort();
// console.log(words);

//transform words into an object for easy lookup of words
var wordsHash = {};
for (var i=0; i<words.length; i++){
 wordsHash[words[i]] = true;
}

prompt.start();



var binarySearch = function (array, target) {
var sub = function (low, high) {
  if (high === low) {
    return null;
  }
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

function removeDuplicateLetters( string ){
var unique='';
for(var i=0; i<string.length; i++){
  if(unique.indexOf(string[i]) === -1){
    unique += string[i];
  }
}
return unique;
}

function isVowels(str) {
var vowels = ['a', 'e', 'i', 'o', 'u'];
for (var i = 0; i < str.length; i++) {
  if (vowels === str[i]) {
    return true;
  }
}
return false;
}

function changeVowel (string) {
var result = [];
for (var i = 0; i < string.length; i++) {
  var index = string.charAt(i);
  if(isVowels(index)) {
    result.push('*');
  } else {
    result.push(index);
  }
}
return result;
}

var wordCheck = function(word) {
var check = binarySearch(words, word);
while (word) {
  if(check !== -1) {
    return word + 'is spelled correctly';
  }
}

//1. Case (upper/lower) errors `inSIDE -> inside`
var wordLowerCase = word.toLowerCase();
if (wordLowerCase in wordsHash) {
  return wordLowerCase;
}

//2. Repeated letters `jjoobbb -> job`
var wordWithouthDuplicateLetters = removeDuplicateLetters(word);
if (wordWithouthDuplicateLetters in wordsHash) {
  return wordWithouthDuplicateLetters;
}

//3. Incorrect vowels `weke -> wake`
var wordVowels = changeVowels(word); 
for (var i=0; i<wordVowels.length; i++) {
  if (wordVowels[i] in wordsHash) {
    return wordVowels;
  }
}

//4. Any combination of the above types of errors `CUNsperrICY -> conspiracy`
// lets start by putting everithing in lowerCase
//then start generating posibilities changing vowels and removing duplicate letters
//every possibility check with wordsHash. If match return it.
var lower = word.toLowerCase();

};

prompt.get(['word'], function (err, result) {
 if (err) { return onErr(err); }
 console.log(result['word']);
 wordCheck(result['word']);
 //
});

function onErr(err) {
   console.log(err);
   return 1;
 }