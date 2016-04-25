function isUnique(str) {
  if(str.length > 256){
      return false
  }
  var uniq= []
  for(var i = 0; i < str.length; i++){
    var val = str.charAt(i);
    if(uniq[val]){
      return false;
    }
    uniq[val] = true;
  }
  return true
}

function reverse(str) {
  var result = ""
  for(var i = 0; i < str.length; i++) {
    result += str[str.length-1-i];
  }
  return result
}

function remDup(arr) {
  var hash = {}
  var result = [];
  arr.forEach(function(value) {
    hash[value] = value
  });
  for(var key in hash) {
    result.push(key);
  }
  return result
}

function isAnagram(str1, str2) {
  var result = {}
  if(str1 === null || str2 === null) {
    return false;
  }
  if(str1.length !== str2.length || str1.length < 2) {
    return false
  }
  for(var i = 0; i < str1.length; i++) {
    result[str1.charAt(i)]++
    result[str2.charAt(i)]++
  }
  for(var i = 0; i < 256; i++) {
    if(result[i] != 0) {
      return false
    }
  }
  return true;
}

function isAna(str1, str2) {
  for (var i = 0; i < str1.length(); i++) {
    for (var j = 0; j < str2.length(); j++) {
        if (str1[i] == str2[j]) {
            str2[j] = null;
            break;
        }
        if (j == str2.length() - 1)
            return false;
    }
  }
}

function replaceFun(str) {
  var newWord = ""
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i) === " ") {
      newWord += "%20";
    } else {
      newWord += str.charAt(i)
    }
  }
  return newWord;
}
