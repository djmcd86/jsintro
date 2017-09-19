/* A common modern use is the ROT13 cipher, where the values of the letters are
 shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
 (i.e. spaces, punctuation), but do pass them on.*/

 function rot13(str) { // LBH QVQ VG!
   var letters = [];
  for (var i = 0; i < str.length; i++) {
  letters.push(str.charCodeAt(i) - 13);
}
  return String.fromCharCode.apply(null, letters);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

function rot13(str) { // LBH QVQ VG!
  var letters = [];
 for (var i = 0; i < str.length; i++) {
   if (str[i] < 65 || str[i] > 90) {
  letters.push(str.charCodeAt(i));
} else if (str[i] < 77) {
  letters.push(str.charCodeAt(i) + 13);
} else {
  letters.push(str.charCodeAt(i) - 13);
}
return String.fromCharCode.apply(null, letters);
}


//idea from perusing solution
map(function(x){}) provides a new array applied to all elements within
call ??: accepts a list of arguments

function rot13(str) {
  var letters = str.split('');
  letters.map(function (x) {
    str.charCodeAt(x);
  })
}

//Iterate over array by:
.map.call(str, function(char){

})

function rot13(str) {
  return str.split(''); //DON'T USE SEMI-COLON HERE (why??) perhaps because you want to return alll of it
  .map.call(str, function(char) {
    x = char.charCodeAt(0);
    if (x < 65 || x > 90) {
      return String.fromCharCode(x);
    } else if (x < 77) {
      return String.fromCharCode(x + 13);
    } else {
      return String.fromCharCode(x - 13);
    }
  }).join('');
}
