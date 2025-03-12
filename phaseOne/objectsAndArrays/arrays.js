// Array 1:
// Write a function reverseArray(arr) that takes an array of numbers and returns a new array with the elements in reverse order (without using .reverse()).
const reverseArray = (arr) =>{
    let reversed = []
    for(let i=arr.length -1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
}

console.log(reverseArray([1,2,3,4,5,6]))
// Array 2:
// Write a function removeDuplicates(arr) that takes an array of numbers and returns a new array with only unique elements (no duplicates).
const removeDuplicates =(arr) =>{
    let unique = []
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}
console.log(removeDuplicates([1,2,1,2,3,3,1,2,4]))

// Array 3:
// Write a function sumOddNumbers(arr) that takes an array of numbers and returns the sum of all odd numbers in the array.
const sumOddNumbers = (arr) =>{
  let sum = 0
  for (let i=0; i<arr.length; i++){
    if(arr[i] % 2 !== 0){
        sum += arr[i]
    }
  }
  return sum
}

console.log(sumOddNumbers([1,2,3,4,5]))

// Array 4:
// Write a function flattenArray(arr) that takes a nested array (an array of arrays) 
// and flattens it into a single array. 
// flattenArray([[1, 2], [3, 4], [5, 6]]) // returns [1, 2, 3, 4, 5, 6]
const flattenArray = (arr) =>{
    let flattened = []
    for(let i =0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++){
            flattened.push(arr[i][j])
        }
    }
    return flattened
}

console.log(flattenArray([[1,2], [3,4], [5,6]]))
// Array 5:
// Write a function findIndexOfValue(arr, value) that takes an array and a value and
//  returns the index of the first occurrence of that value. If the value doesn’t exist, return -1.

const findIndexOfValue = (arr, value) =>{
    for(let i=0; i<arr.length; i++){
        if (arr[i] === value){
            return i
        }
    }
    return -1
}
console.log(findIndexOfValue(["Orange","Grapes", "Apple"], "Orange"))


// Create an array numbers with the numbers 1 through 5. Then, access and log the third element in the array.




//  Array Manipulation

// Given an array numbers = [1, 2, 3, 4, 5], do the following:

// Add the number 6 to the array.
// Remove the first element from the array.
// Find the index of the number 3.
// Log the updated array.

// Write a function reverseArray that takes an array as an argument and returns the array in reverse order. Do not use the reverse() method.



// You have a nested array like this:
// let nestedArray = [1, [2, 3], [4, [5, 6]]];
// Write a function that flattens it into a single-level array:

// Given an array of numbers, use the filter() method to create a new array that contains only the numbers greater than 10.

// DONE PART-1 ARRAYS CHALLENGES



