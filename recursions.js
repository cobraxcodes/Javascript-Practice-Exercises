// Write a recursive function sumNumbers(n) that takes a number n and
//  returns the sum of all numbers from 1 to n.
 
const sumNumbers = (n) =>{
    if(n === 0){
        return 0
    }
    return n + sumNumbers(n-1)
}
console.log(sumNumbers(5))

const test = (n) =>{
    let result = 0;
    for(let i = 0; i <= n; i++){
        result+= i
    }
    return result
}
console.log(test(5))

console.log(sumNumbers(5))

// Reverse a String (Recursion)
// Write a recursive function that takes a string as input and 
// returns the string in reverse order.

const stringReverse = (str) =>{
    if(str.length === 0){
        return ""
    }
    return stringReverse(str.slice(1)) + str[0]
}
console.log(stringReverse("Hello"))

const reverse = (str) =>{
    let reversed = ""
    for(let i = str.length -1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}
console.log(reverse("Hello"))



// Sum of Array (Recursion)
// Write a recursive function that calculates 
// the sum of all numbers in an array.
const sumOfArray = (arr) =>{
    if(arr.length === 0){
        return 0
    }
    return arr[0] + sumOfArray(arr.slice(1))
}

console.log(sumOfArray([5,5,5,5,5]))

// for loop = sum of Array
const testArray = (arr) =>{
    let resultArr = 0
    for (let i=0; i<arr.length; i++){
        resultArr+= arr[i]
    }
    return resultArr
}
console.log(testArray([5,5,5,5,5]))


// Write a recursive function multiplyArray(arr) that takes an array of numbers and 
// returns the product of all the elements in the array.


const multiplyArray = (arr) =>{
    if(arr.length === 0){
        return 1
    }
    return arr[0] * multiplyArray(arr.slice(1))
}
console.log(multiplyArray([5,2]))



const testMultiply = (arr) =>{
    let testProduct = 1
    for(let i = 0; i<arr.length; i++){
       testProduct *= arr[i]
    }
    return testProduct
}

console.log(testMultiply([1,2,3]))


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