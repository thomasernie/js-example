({
    babel: true
})

// 7 Passed as Argument
var callBack = function() {
  var a = 1*2;
  console.log(a);

  return a;
};
//setTimeout(callBack, 500);/*?*/

// 8 Returned function

function counter() {
    var count = 0;
    console.log("this is first time");
    var returnFunction = function() {
       console.log("this is "+ (count+1) +"th time");
        return count++;/*?*/
    }
      return returnFunction;
}
  var a = {};
  a.myCount = counter();
  a.myCount();/*?*/
  a.myCount();/*?*/
  a.myCount();/*?*/


  var sumVAA = function(num1, num2) {
  return num1 + num2;};
//Arrow Functions
var sumA = (num1, num2) => {
  console.log(num1);
  return num1 + num2
};

// Anonymous w/out optional
// bracketed return
var sumAA = (num1, num2) => (num1 + num2); /*?*/

sumA(1,2)/*?*/
sumAA(1,2)/*?*/


