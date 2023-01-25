//NaN --> "not a number"
// here Nan is refered as invalid number


var myAge = Number("21");
var mycatsAge=Number("n/a");
myAge -"my son's age";

mycatsAge ===mycatsAge;

console.log(isNaN(myAge));//false
console.log(isNaN(mycatsAge));//true
console.log(isNaN("my son's age"));//true

console.log(Number.isNaN(mycatsAge));//true
console.log(Number.isNaN("my son's age"));//false   because coresion it will not convert to number 
isNaN coerce implicitly(automatically)

isNaN(10)