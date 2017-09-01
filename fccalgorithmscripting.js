//Reverse the string
function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");

//Factorialise.
//How do you get rid of the infintie loop??

function factorialize(num) {
  for (i = 1; i <= num; i++) {
    num = (num-1) * i;
  }
  return num;
}

factorialize(5);

//This code works, but not for num = 0
//How to get this to return 0 when num = 0?
function factorialize(num) {
  for (i = num ; i >= 0; i--) {
    num = num * i;
  }
  return num;
}

function factorialize(num) {
  for (var i = 0; i <= num - 1; i++) {
    num = num * i;
  }
  return num;
}

//Used function from above, but added ifelse statements after looking for hints
function factorialize(num) {
 if (num < 0) {
  return - 1;
} else if (num == 0) {
  return 1;
} else {
  for (i = num - 1 ; i > 0; i--) {
    num *= i;
  }
  return num;
}
}
factorialize(10);

//Check for Palindromes
//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  var strClear = str.toLowerCase().replace(/[^0-9a-z]/gi, ''); //getting rid of non-alphanumeric characters
  var strReverse = strClear.split('').reverse().join().replace(/,/g, '');
  if (strClear == strReverse) {
      return true;
  } else {
    return false;
  }
}

//Find longest word in string
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
    var words = str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  });
  return words[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Capitalise First Letter in Each words
function titleCase(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    return words[0];
  }
  return words[0].toUpperCase();
}

titleCase("I'm a little tea pot");

//2nd iteraiton
function titleCase(str) {
  var words = str.split(" ");
  words.forEach(function(e) {
    e.replace(/\b\w/g, function(l){
      return words.l.toUpperCase();
    });
  });
}
titleCase("I'm a little tea pot");
/*The shortest implementation for capitalizing words within a string is the following using ES6's
arrow functions:

'your string'.replace(/\b\w/g, l => l.toUpperCase())
// => 'Your String'
ES5 compatible implementation:
'your string'.replace(/\b\w/g, function(l){ return l.toUpperCase() })
// => 'Your String'
The regex basically matches the first letter of each word within the given string
and transforms only that letter to uppercase:
\b matches a word boundary (the beginning or ending of word);
\w matches the following meta-character [a-zA-Z0-9].
*/

function titleCase(str) {
  return str.replace(/\b\w/g, function(l){
    return l.toUpperCase()
  });
}

//From StackOverflow
function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){ //\w selects AlphaNumChar, \S matches char other the whitespace, * matches it 0 or more times
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
