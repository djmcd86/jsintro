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

// 2nd Try (with help again)
function getIndexToIns(arr, num){
  arr.sort(function(a,b){
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return arr.indexOf(arr[i]); // don't need this. Just 'return i'
    } else {                      //don't need 'else', just another return statement
      return arr.indexOf(arr[i]+1); //NO: 'return arr.length'!!
    }
  }
}

function getIndexToIns(arr, num){       function getIndexToIns(arr, num) {
  arr.sort(function(a,b){                 arr.sort(function(a, b) {
    return a - b;                             return a - b;
  });                                      });
  for (var i = 0; i < arr.length; i++) {      for (var a = 0; a < arr.length; a++) {
    if (arr[i] >= num) {                          if (arr[a] >= num)
      return i;                                           return a;
    }                                         }
      return arr.length;  //this needs to be in the brackets below
  }
  //HERE: return arr.length;
}

function getIndexToIns(arr, num){
  arr.sort(function(a,b){
    return a-b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
    return arr.length;
  }
}
