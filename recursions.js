// Write a recursive function sumNumbers(n) that takes a number n and
//  returns the sum of all numbers from 1 to n.

const sumNumbers = (n) =>{
    if(n === 1){
        return 1
    }
    return n + sumNumbers (n-1)
}

console.log(sumNumbers(10))

// Reverse a String (Recursion)
// Write a recursive function that takes a string as input and 
// returns the string in reverse order.
const reverseString = (str) =>{
    if(str === ""){
        return ""
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Hello"))


// Sum of Array (Recursion)
// Write a recursive function that calculates 
// the sum of all numbers in an array.
const sumOfArray = (arr) =>{
    if(arr.length === 0){
        return 0
    }
    return arr[0] + sumOfArray(arr.slice(1))
}

console.log(sumOfArray([1,2,3,4,5]))


// Exponentiation (Recursion)
// Write a recursive function 
// that calculates the power of a number.
//  For example, base^exponent.

// Fibonacci Sequence (Recursion)
// Write a recursive function that returns the nth Fibonacci number.
//  The Fibonacci sequence starts with 0 and 1, 
// and each subsequent number is the sum of the previous two.

// Factorial of a Number (Recursion)
// This is just to reinforce the factorial calculation,
// but this time you can try solving it with
//  an additional check for negative numbers.

// Find Maximum in Array (Recursion)
// Write a recursive function 
// that finds the largest number in an array.