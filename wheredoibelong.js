/* Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted.
The returned value should be a number.*/

function getIndexToIns(arr, num) {
  var flatArgs = Array.prototype.slice.call(arguments).reduce(function(a, b) {
  return a.concat(b);
});
return flatArgs;
  flatArgs.sort(function(a,b) {
    return a - b;
  });
  console.log(flatArgs);
}

getIndexToIns([40, 60], 50);

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
