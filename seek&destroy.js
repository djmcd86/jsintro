/* You will be provided with an initial array
(the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
return arr.filter(function(value) {
  for (var i = 1; i < arr.length; i++) {
    if (value[i] !== value[1]) {
      return value[i];
    }
    }
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

filter if arguments[1] (iterate through this?) !== any of the other

//Another go (with help)

var args = arr.slice.call(arguments) // this creates an array from the arguments.
return arr;

split off args[0] to make new var? //NO, arr is the beginning array NOT var first = args.splice(0,1)
var args = arr.slice.call(arguments)
for (var i = 1; i < arr.length; i++) {
  for (var j = 0; j < args.length; j++) {
    if (arr[i] === args[j]) {
          delete arr[i];
    }
  }
return arr.filter(Boolean);
}
