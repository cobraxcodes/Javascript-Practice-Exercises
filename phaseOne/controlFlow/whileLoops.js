// Write a while loop that counts down from 10 to 1 and logs each number to the console.   

// let i = 10;
// while(i >= 1){
//   console.log(i);
//   i--
// }

// Write a while loop that calculates the sum of numbers from 1 to 100 and prints the final sum.
let num = 1
let sum = 0
while(num <= 100){
    sum+= num
    num++ 
}
console.log(sum)

// Write a program where a random number (between 1 and 10) is generated, and the user has to guess it. Keep asking until they get it right. (Use prompt() in the browser or readline in Node.js).