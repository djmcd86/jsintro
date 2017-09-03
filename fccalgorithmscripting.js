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
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    return str[i];
  }
  return words[0].toUpperCase();
}

titleCase("I'm a little tea pot");
//This Method Correctly:
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

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

//From StackOverflow - this works
function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt){ //\w selects AlphaNumChar, \S matches char other than whitespace,
      //* matches it 0 or more times: I think this is asking to replace ALL CHARACTERS with the following function
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); //,substr() returns characters in string beginning at specified location.
    });
}

//Another way
tunction titleCase(str) {
  var words = str.toLowerCase().split(" ");
  str[i]
}

/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

 //get max value:
 function getMaxOfArray(numArray) { //I didn't map the results onto a new array!!
  return Math.max.apply(null, numArray);//First argument of apply() sets value of 'this'
}

 function largestOfFour(arr) {
  for (var i = 0; i <arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    return arr[j];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//return max of single array. This works for a single array
return Math.max.apply(null, arr);
//use forEach? Doesn't work
arr.forEach(function (e){//I don't know what arguments to use for function
  return Math.max.apply(null, e);
});

//Second attempt: FCC solution using Math.max
function largestOfFour(arr) {
   return arr.map(function (subArray) {   //need to map to a new array
     return Math.max.apply(null, subArray);
   }
  });

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
str.substr(-1)//returns the last character in a string

//This functions works for 'whole parts' of string but not sections eg: str ="sesame" target = "same" TRUE
function confirmEnding(str, target) {
  if (str.substr(-1) == target) {
    return true;
  } else {
    return false;
  }
}
// Displays 'illa' the last 4 characters
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);
/* Use substring as above, iterating through the number value from -1 (counting backwards)
*  Check each time
*/
function confirmEnding(str, target) {
  var words = str.split(" ");
  var lastWord = words[words.length-1];     //last word in string
  if (lastWord.substring(target.length) == target) {
    return true;
  } else {
    return false;
  }
}

//Need to match the substring(target)
lastWord.substring(target.length)
var part = str.substring(str.length-target.length);
//THIS IS THE ANSWER
function confirmEnding(str, target) {
  if (str.substring(str.length-target.length) == target) {
    return true;
  } else {
    return false;
  }
}

/*Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str,num) {
  for (var i = 0; i <= num; i++) {
    str += str;
  }    //LOOP and concat str+=str
  return string;
}

if (num < 0) {
  return ""
} else {
  return str.repeat(num);
}

/*Truncate a string
Truncate a string (first argument) if it is longer than the given maximum
string length (second argument). Return the truncated string with a ... ending
*/
if (str.length>num && num>3) {
  return str.slice(0,num-3) + "...";
} else if (str.length>num && num<=3) {
  return str.slice(0,num) + "...";
} else {
  return str;    //I didn't include this last part in my answer
}

/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length
 of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
