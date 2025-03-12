// Function 1:
// Write a function addTwoNumbers(a, b) that takes two numbers and returns their sum.
const addTwoNumbers = (x, y) =>{
    return x + y
}

console.log(addTwoNumbers(1,3))

// Function 2:
// Write a function multiplyNumbers(a, b) that takes two numbers and returns their product.
const multiplyNumbers = (x,y) =>{
    return x * y
}

console.log(multiplyNumbers(3,4))
// Function 3:
// Write a function greetPerson(name) that takes a name as an argument and
//  returns a greeting string "Hello, [name]!"
const greetPerson = (name) =>{
    return `Hello, ${name}!`
}
console.log(greetPerson("Patience"))

// Function 4:
// Write a function calculateArea(radius) that calculates the area of a circle and 
// returns it (use the formula π * radius^2).
const calculateArea = (radius) =>{
    let π = 3.14
    return π * radius**2
}
console.log(calculateArea(2))

// Function 5:
// Write a function findMax(arr) that takes an array of numbers and returns the highest number in the array.

const findMax = (arr) =>{
    let largest = 0
    for (let i=0; i<arr.length; i++){
        if (largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findMax([1,2,3,4,5,6]))
// Function 6:
// Write a function countVowels(str) that takes a string and 
// returns the number of vowels in the string.
const countVowels = (str) =>{
    let vowels = 0
    for(let i=0; i<str.length; i++){
        if ("aeiouAEIOU".includes(str[i])){
            vowels++
        }
    }
    return vowels
}

console.log(countVowels("Helloo"))
// Function 7:
// Write a function isPalindrome(str) that takes a string and 
// checks if it is a palindrome

const isPalindrome = (str) =>{
for(let i=0; i<str.length / 2; i++)
    if(str[i] !== str[str.length -1 -i]){
        return false
    }
    return true
}

console.log(isPalindrome("racecar"))

// DONE PART-ONE FUNCTIONS CHALLENGES

//  Write a function that takes two numbers and returns their sum.

//  Write a function that checks if a number is even or odd.

// //  Write a function that takes a name and age, then logs:

// "You're an adult!" if age is 18 or above.
// "You're a minor!" otherwise.


//  Convert this function into an arrow function:
// function multiply(a, b) {
//     return a * b;
// }



// ️ Write a function that returns the length of a given string.

