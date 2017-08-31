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

  //Nesting for Loops
  function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(product *= arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

//Profile Lookup
/*  A lookUpProfile function that takes firstName and a property (prop) as
 arguments has been pre-written for you.
 The function should check if firstName is an actual contact's firstName and
 the given property (prop) is a property of that contact.
 If both are true, then return the "value" of that property.
 If firstName does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties then return "No such property"
*/
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(firstName, prop){
// Only change code below this line
if(contacts.hasOwnProperty(firstName) == true && ontacts.hasOwnProperty(prop) == true) {
    return prop[" "]; //How do I test for TWO VARIABLES and give the result as an array??
  } else if (contacts.hasOwnProperty(firstName) == false) {
    return "No such contact";
  } else {
    return "No such property";
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

//SECOND attempt: after reading hint about iterating through array
function lookUpProfile(firstName,prop) {
  //Define another variable??
  for (i = 0; i < contacts.length; i++) {
    for (j = 0; j < contacts[i].length; j++) {
      if(contacts.hasOwnProperty(firstName) == true && contacts.hasOwnProperty(prop) == true) {
          return contacts.prop; //How do I test for TWO VARIABLES and give the result as an array??
        } else if (contacts.hasOwnProperty(firstName) == false) {
          return "No such contact";
        } else {
          return "No such property";
        }
    }
  }
}
//THIRD TRY:after looking at MDN Documentation
for (var firstName in contacts) {
  if(contacts.hasOwnProperty(firstName) == false) {
    return "No such property";
  } else if (contacts.hasOwnProperty(prop) == false) {
    return "No such property";
  } else {
    return contacts[prop];
  }
}
//Copied solution
for (var i = 0; i < contacts.length; i++){    for (var x = 0; x < contacts.length; x++){
  if (contacts[i].firstName === firstName) {    if (contacts[x].firstName === firstName) {
    if (contacts[i].hasOwnProperty(prop)) {       if (contacts[x].hasOwnProperty(prop)) {
      return contacts[i].prop;                        return contacts[x][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";

Math.Random() //This function returns a decimal >=0 and < 1
//define max and min values

//Creating a constructor
functionvar MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};

//Create a new instance of the object 'MotorBike' by:
var myBike = new MotorBike();
//then create a new property:
myBike.color = "orange";

/*Create parameters for the contructor function so a new object with same properties
* but different values can be made
*/
var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(3,3,2);
