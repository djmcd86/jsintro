//Prints numbers 0 to 9. This is a loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}
//indexing a string, finding part of a string by its location
var name = "James";
console.log(name [0]);

//IF...ELSE statements

//Simple decision making 'Should I buy the hammer?'
var price = 15.00;
var money = 20.00;
if(money >= price) {
  console.log("Buy the hammer.");
} else {
  console.log("Don't buy the hammer.");
}
//Musical groups problem
// change the value of `musicians` to test your conditional statements
var musicians = 1;

if (musicians <= 0) {
    console.log ("not a group");
} else if (musicians === 1) {
    console.log ("solo");
} else if (musicians === 2) {
    console.log ("duet");
} else if (musicians === 3) {
    console.log ("trio");
} else if (musicians === 4) {
    console.log ("quartet");
} else {
    console.log ("this is a large group");
}

// Murder mystery problem. Change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "dining room") {
    weapon = "knife";
} else if (room == "billiards room") {
    weapon = "pool stick";
} else if (room == "gallery") {
    weapon = "trophy";
} else {
  weapon = "poison";
}

if (suspect == "Mr. Parkes" && room == "dining room") {
  solved = true;
} else if (suspect == "Ms. Van Cleve" && room == "gallery") {
  solved = true;
} else if (suspect == "Mrs. Sparr" && room == "billiards room") {
    solved = true;
} else if (suspect == "Mr. Kalehoff" && room == "ballroom") {
    solved = true;
} else {
    solved = false;
}

if (solved = true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//Checking your Balance
//Using && and || (or not!)
var balance = -50.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else if (isActive === false) {
  console.log("Your account is no longer active.");
} else if (balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (balance === 0) {
  console.log("Your account is empty.");
} else {
  console.log("Your balance is negative. Please contact bank.");
}

* Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor = "vanilla" || flavor = "chocolate") && (vessel = "cone" || vessel = "bowl") && (toppings = "sprinkles" || toppings = "peanuts") {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with" + toppings + ".");
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  console.log("S");
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  console.log("M");
} else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  console.log("L");
} else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
  console.log("XL");
} else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category =
      eatsAnimals && eatsPlants ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : "undefined";

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 */
// change the value of `education` to test your code
var education = "no high school diploma";
// set the value of this based on a person's education
var salary;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    breal;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");

//Usin default value in switch statements
function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

// Change this value to test
switchOfStuff(1);

//LOOPS
var x = 1;
while (x <= 10000) {
  console.log(x + "mississippi!");
  x = x + 1;
}

/* Using WHILE LOOPS
 * Programming Quiz: JuliaJames (4-1)
 * TODO: Make it more efficient by using switch statements
 */

var x = 1;

while (x <= 20) {
if (x % 3 === 0 && x % 5 === 0) {
  console.log("JuliaJames");
} else if (x % 3 === 0) {
    console.log("Julia");
} else if (x % 5 === 0) {
    console.log("James");
} else {
  console.log(x);
}
x = x + 1;
}

//WHILE loops
var num = 99;

while (num <= 99 && num >= 1) {
    if (num === 1) {
      console.log( num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    } else if (num === 2) {
      console.log( num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }else {
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
 * Using a while loop, print out the countdown output above.
 */

 //Using else...if//
 var x = 60;

 while (x >= 0) {
     if (x == 50) {
     console.log("Orbiter transfers from ground to internal power");
  } else if (x == 31) {
     console.log("Ground launch sequencer is go for auto sequence start");
  } else if (x == 16) {
     console.log("Activate launch pad sound suppression system");
  } else if (x == 10) {
     console.log("Activate main engine hydrogen burnoff system");
  } else if (x == 6) {
     console.log("Main engine start");
  } else if (x === 0) {
     console.log("Solid rocket booster ignition and liftoff!");
  } else {
      console.log("T-" + x + " seconds");
  }
  x = x - 1
 }

 //Switch statement don't work!!??
 var x = 60;

 while (x >= 0) {
   switch (x) {
     case x == 50:
     console.log("Orbiter transfers from ground to internal power");
       break;
     case x == 31:
     console.log("Ground launch sequencer is go for auto sequence start");
         break;
     case x == 16:
     console.log("Activate launch pad sound suppression system");
         break;
     case x == 10:
     console.log("Activate main engine hydrogen burnoff system");
         break;
     case x == 6:
     console.log("Main engine start");
         break;
     case x == 0:
     console.log("Solid rocket booster ignition and liftoff!");
         break;
     default: "T-" + x + " seconds";
   } x = x - 1
 }

 /*Write a for loop that prints out the factorial of the number 12:

*A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3!=3∗2∗1=6
4!=4∗3∗2∗1=24
5!=5∗4∗3∗2∗1=120
*Save your final answer in a variable called solution and print it to the console.
*///Wasn't sure about the solution variable. Confusing that you can have "solution = solution * 1"
var solution = 12

for (var i = 11; i > 0; i--) {
 solution = solution * i;
}

console.log(solution);

/*Theater seats often display a row and seat number to help theatergoers find their seats.
If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row,
 write a nested for loop to print out all of the different seat combinations in the theater.
 */
var row = 0
var seat = 0

for (var row = 0; row < 26; row++) {
  for (var seat = 0; seat < 100; i++) {
    console.log(row + "-" + seat);
  }
}
//  remember to make the minus sign in the answer a string!!!
