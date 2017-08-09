({
    babel: true
})
var _ = require('lodash');
var numbers = [1, 2, 3, 4];

var object = {name:'karthi',age: 33};
var arrObject = [{name:'karthi',age: 33},{name:'jay',age: 33},{name:'prkash',age: 25}]

var newNumbers = numbers.map(function(number){
    return number * 2;
});
//arrow
var newNumbers = numbers.map(number=>number * 2);
console.log("The old numbers are", numbers); 
console.log("The doubled numbers are", newNumbers); 

var newArrObject = arrObject.map(object=>{
  var newObject = _.cloneDeep(object);
  newObject.age = object.age+2;
  return newObject});
console.log("The doubled objects are", newArrObject); 
console.log("The doubled objects are", arrObject); 



var evenNumbers = numbers.filter(function(number){
    return (number %2 === 0);
});/*?*/

// simpler
var evenNumbers = numbers.filter(number=>(number % 2 === 0)); /*?*/


//support fn
var isEven =function(number){
return (number % 2 === 0)
}
//simplest
var evenNumbers = numbers.filter(isEven); /*?*/
console.log("The total number is", totalNumber); 


var newFilObject = arrObject.filter(object=>object.age===33);
console.log("The doubled objects are", newFilObject); 
console.log("The doubled objects are", arrObject); 

var newFindObject = arrObject.find(object=>object.age===33);
console.log("The doubled objects are", newFindObject); 
console.log("The doubled objects are", arrObject); 



var totalNumber = numbers.reduce(function(total, number){
  console.log(number)
   console.log(total)
    return total + number;
}, ); 
  console.log("The total number is", totalNumber); 



 var combineName = arrObject.reduce((cobinedName, object)=>cobinedName + object.name+' ,', ''); 
  console.log("The combineName is", combineName); 


  var totalNumber = numbers.reduce((total, number)=>(total + number), 0); 

console.log("The total number is", totalNumber); // 10





var doubleTotalNumber = numbers.map((number)=>number * 2)
.reduce((total, number) => total + number, 0);

console.log("The total number is", doubleTotalNumber); // 20

