switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;

//Counting Cards
/* Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter and
increment or decrement the global count variable according to the card's value
(see table). The function will then return a string with the current count and
the string "Bet" if the count is positive, or "Hold" if the count is zero or
negative. The current count and the player's decision ("Bet" or "Hold") should
be separated by a single space.
*/
//  YEW BEWDY IT WORKED!!
var count = 0;

function cc(card) {
  // Only change code below this line
  if (card < 7) {
    count += 1;
  } else if (card < 10) {
    count = count;
  } else {
    count -= 1;
  };
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

// Testing objects for properties
//Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
if(myObj.hasOwnProperty(checkProp) == true) {
    return "";
  } else {
    return "Not Found";
  }
}
checkObj("gift");

//Add the value of each element to total
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
