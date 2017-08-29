/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh() {
    var message = "hahahahahahahahahaha!";
    return message;
}
console.log(laugh());

/*Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!
Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
*/
//  THIS WAS REALLY HARD!! Unsure of var = "" empty string
//also x <= num value
// also the use of +=


function laugh(num) {
  var phrase = "";
    for(x = 1; x <= num; x++) {
        phrase += "ha";
    }
    return phrase + "!";
}

console.log(laugh(5))

//Use dot for multiplication??

//REMEMBER TO CALL THE FUNCTION


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  var row = "";
  for (var y = 1; y <= length; y++) {
    makeLine(length);
  }
  return row;

console.log(buildTriangle());

//The code below returns the correct values but is 'wrong' because it logs it to
//the console but doesn't return it
function buildTriangle(size) {
  for (var y = 0; y < size; y++) {
    makeLine(y);
    console.log(makeLine(y));
  }
  return makeLine(y);
}

console.log(buildTriangle(10));

//The correct answer!!! STILL UNSURE ABOUT += operator
//NEED TO DEFINE VAR TRIANGLE FIRST
function buildTriangle(size) {
  var triangle = "";
  for (var y = 1; y <= size; y++) {
    triangle += makeLine(y) ;
  }
  return triangle
}

console.log(buildTriangle(4));

//Almost getting it!!
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(y) {
    var ho = "";
    for (i = 1; i <= y; i++) {
       ho += "ha";
    }
    return ho + "!";
}

console.log(laugh(10));

//Inline function

emotions("happy", function laugh(y){
    var ho = "";
    for (i = 1; i <= y; i++) {
       ho += "ha";
    }
    return ho + "!";
}
);

/*
 * Programming Quiz: Cry (5-5)
 * Using a named function expression
 */

var cry = function booHoo(y) {
    return "boohoo!";
};

console.log(cry());

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0) {
    a;
  }
  if (b < 0) {
    b;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
