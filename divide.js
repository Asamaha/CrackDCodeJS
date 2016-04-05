function canRearrangeToPalindrome(str)
{
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}


function divide(a, b) {
    var result = 0;
    var sign = 1

    if( b === 0 ) {
        return 0;
    }
    if (a < 0) {
        a = -a;
        sign = -sign;
    }
    if(b < 0) {
        b = -b;
        sign = -sign;
    }
    while(a >= 0) {
        a -= b;
        result++;
    }
    return (result-1) * sign
}