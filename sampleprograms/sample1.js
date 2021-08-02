// //Synchronous code in js

// //(A) ADD FUNCTION
// function add (first, second) {
//   return first + second;
// }
 
// // (B) MULTIPLY FUNCTION
// function multiply (first, second) {
//   return first * second;
// }
 
// // (C) ADD, THEN MULTIPLY
// // (C1) ADD(2, 3) WILL RUN FIRST
// // (C2) FOLLOWED BY MULTIPLY(5, 5)
// var result = multiply(add(2, 3), 5);
// console.log(result); // 25
// (A) ASYNCHRONOUS ADD
function add (first, second) {
    return first + second;
  }
   
  // (B) RUN!
  var result = add(2, 3);
  console.log(result); // PROMISE