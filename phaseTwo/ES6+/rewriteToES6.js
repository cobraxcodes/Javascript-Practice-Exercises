//1. Turn this into ES6+:
// const firstName = "Melrose";
// const greeting = "Hello " + firstName + "!";
// console.log(greeting);

// solution:

const greet = (firstName) =>{
    return `Hello ${firstName}!`
}

console.log(greet("Melrose"))

//2. Turn this into ES6+:
// function add(x, y) {
//     return x + y;
//   }
  
const add = (x,y) =>{
    return x+y
}
console.log(add(1,2))

//  3. Turn this into ES6+:
// var colors = ["red", "green", "blue"];
// var firstColor = colors[0];
// var secondColor = colors[1];

const colors = ["red", "green", "blue"]
const [firstColor,secondColor]=colors
console.log(firstColor, secondColor)

//4.
// // var person = {
//   name: "Melrose",
//   age: 24,
//   greet: function() {
//     return "Hi, I'm " + this.name;
//   }
// };

const person={
    nameMe: "Melrose",
    age: 24,
}
const {nameMe}=person
const greetMe = () =>{
    return `Hi, I'm ${nameMe}`
}
console.log(greetMe())
//5.// function multiply(a, b) {
//   if (b === undefined) {
//     b = 1;
//   }
//   return a * b;
// }

const multiply = (a, b =1) =>{
    return a * b
}

console.log(multiply(2,3))
//6.// 
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr1.concat(arr2);
const combined2 = [...arr1,...arr2]
console.log(combined2)