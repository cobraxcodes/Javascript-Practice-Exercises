// Array 1:
// Write a function reverseArray(arr) that takes an array of numbers and returns a new array with the elements in reverse order (without using .reverse()).
const reverseArray = (arr) =>{
    let reversed = []
    for(let i=arr.length -1; i >= 0; i--){
        reversed += arr[i]
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
            unique += arr[i]
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
            flattened += arr[i] [j]
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
    return NaN
}
console.log(findIndexOfValue(["Orange","Grapes", "Apple"], "Orange"))

// DONE PART-1 ARRAYS CHALLENGES