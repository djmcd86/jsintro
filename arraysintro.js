//Using loops with arrays
var donuts = ["jelly donuts", "cinnamon donut", "glazed donut"];

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
}

//Using forEach loops:
function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase;
  console.log(donut);
}

donuts.forEach(printDonuts);

//As an inline function:
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase;
  console.log(donut);
});

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(e) {
  if (e % 3 === 0) {
    e = e + 100;
  }
  return e;
});

console.log(test);

test.forEach(function(e,i) {
  if (e % 3 === 0) {
    test[e] = e + 100;
  }
});

//From stackoverflow
var arr = [{num: 1}, {num: 2}];
arr.forEach(function(item, i) {
  arr[i] = {somethingElse: 1} //using index, change the reference in array
});

//My attempt  CORRECT!!!
test.forEach(function(e, i) {
    if (e % 3 === 0) {  // Need to access the element here
      test[i] = e + 100;  //But the index here
    }
});

//Using MAP function creates new array
var donuts = ["jelly donut", "chocolate donut", "glazed donut"]
var improvedDonuts = donuts.map(function(donut){  //Accepts one argument for the whole array
  donut += "hole";
  donut = donut.toUpperCase();
  return donut; //If using forEach, would return undefined
})

/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(item) {
    item = item + item * 0.15;

    item = item.toFixed(2);
    return Number(item);
});

console.log(totals);

/* Array inside array. Visualise as a grid, with each array as a row, and each
*element belonging to a column.
*/
//Loops can iterate row by row eg:

for (var r = 0; r < grid.length; r++) {
  for (var c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}

/* TODO: UNFINISHED
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (var r = 0; r < array.length; r++) {
  for (var c = 0; c < array[r].length; c++) {
    if (e % 2 === 0) {
      e = "even";
    } else {
      e = "odd";
    }
    console.log([r][c]);
  }
};

//Second go
var oddEven = function(e, i, numbers) {
    for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (e % 2 === 0) {
      e = "even";
    } else {
      e = "odd";
    }
    return e;
  }
}
};
console.log(oddEven);

/* From freecodecamp. at first I had return arr, but I needed to create a new
* -variable to return the correct value.*/

function nextInLine(arr, item) {
  arr.push(item);
  var b = arr.shift();

  return b;
}

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

test.forEach(function(e, i) {
    if (e % 3 === 0) {  // Need to access the element here
      test[i] = e + 100;  //But the index here
    }
});
donuts.forEach(function(item)) {
  console.log(type + " donuts cost " + cost + " each");
}
