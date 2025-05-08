// Loop 1:
// Write a function that uses a for loop to print all numbers from 1 to 10.
function toTen() {
    for (let i=1; i <= 10; i++)
       console.log(i)
    }
    toTen()
    // Loop 2:
    // Write a function that loops through an array of strings and 
    // prints each string in uppercase.
    
    const arrayOfStrings = (arr)=>{
        for(let i=0; i<arr.length; i++){
            console.log(arr[i].toUpperCase()) 
        }
    }
    arrayOfStrings(["fruits", "soaps"])
    // Loop 3:
    // Write a function that sums all elements of an array using a for loop.
    const sumOfNumbers =(arr) =>{
        let sum = 0
        for(let i = 0; i<arr.length; i++){
            sum += arr[i]
        }
        return sum
    }
    console.log(sumOfNumbers([1,2,3,4]))
    
    // DONE PART ONE LOOPS CHALLENGESs