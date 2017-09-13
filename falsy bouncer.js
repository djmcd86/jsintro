var truthy = arr.filter(function(i){
  for (var i = 0; i < arr.length; i++) {
    if (i = true) {
      return truthy;
    }
  }

});

//another attempt (rusty!)
function bouncer(arr) {
  arr.filter(function(i){
    if (i === true) {
      return i;
    };
  });
}

bouncer([7, "ate", "", false, 9]);


undefined, null, NaN, 0, "", false
//cheating

function bouncer(arr){
  return arr.filter(function(value){ //put the return here? Using 'value' as the variable
    if (value) {
      return value;
    }
  })
}
