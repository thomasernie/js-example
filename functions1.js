
let valueVariable = 3 // "Three" //true


// declartion
const sumTwo = ((a, b) => a + b);
console.log(sumTwo(2, 4));


//4 Immediately invoked
(function (a, b) {
  console.log(a + b);
  return a + b;
}(2, 8));

//5 Assigned and Invoked
const greet = function (content) {
  return content;
}(`Hey,I'm nithishwar`);
console.log(greet);

//6 Property Assignment

const objFunc = {
  DOB: 2000,

  calcAge: function () {
    console.log(2021 - this.DOB);
  }
}
console.log(objFunc);


function nameChange(data) {
  let temp = { name: 'nithish' };
  temp = { name: data.name };
  return temp;
}
const obj = {
  name: 'nithishwar'
}
console.log(nameChange(obj));