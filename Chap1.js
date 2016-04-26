// Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

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

// Write code to reverse a C-Style String. (C-String means that “abcd” is represented as  ve characters, including the null character.)

function reverse(str) {
  var result = ""
  for(var i = 0; i < str.length; i++) {
    result += str[str.length-1-i];
  }
  return result
}

// Design an algorithm and write code to remove the duplicate characters in a string without using any additional bu er.
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

// Write a method to decide if two strings are anagrams or not.
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
  for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
            str2[j] = null;
            break;
        }
        if (j == str2.length - 1)
            return false;
    }
  }
}

// Write a method to replace all spaces in a string with ‘%20’.
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

// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
  var result = [];
  for (var i = 0; i < matrix.length; i++) {
    result.push([]);
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; i++) {
      result[j][matrix.length-1-i] = matrix[i][j]
    }
  }
  return result;
}
// in place
function rotateMatrix(arr,arrLen) {
  for (var i = 0; i < arrLen; i++) {
    for (var j = 0; j <i; j++) {
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
}

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
function setZeros(matrix) {
  var rows = new Array(matrix.length);
  var column = new Array(matrix[0].length);

  for (var i = 0; i < rows.length; ++i) {
    for(var j = 0; j < column.length; ++j) {
      if(matrix[i][j] === 0) {
        rows[i] = true;
        column[j] = true;
      }
    }
  }
  for (var i = 0; i < rows.length; ++i) {
    for (var j = 0; j < column.length; ++j) {
      if(rows[i] || column[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix;
}

// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
function isSubstring(str, target) {
  if(str === null || target === null) {
    return false
  }
  return str.includes(target);
}

function isRotate(str, target) {
  if(str.length === target.length && str.length > 0) {
    var merge = str + str;
    return isSubstring(merge, target)
  }
  return false;
}
