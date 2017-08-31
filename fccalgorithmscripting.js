//Reverse the string
function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");

//Factorialise.
//How do you get rid of the infintie loop??

function factorialize(num) {
  for (i = 1; i <= num; i++) {
    num = (num-1) * i;
  }
  return num;
}

factorialize(5);

//This code works, but not for num = 0
//How to get this to return 0 when num = 0
function factorialize(num) {
  for (i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
}
