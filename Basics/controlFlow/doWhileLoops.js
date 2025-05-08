// do {
//     //     (logic)
//     // }
//     //   while(condition)



// Print "Hello!" at least once, even if the condition is false.
do {
    console.log("Hello");
}
while(false)
// Count from 1 to 5 using a do-while loop.
// let i = 0
// do{
//     i++
//     console.log(i)
// }while(i < 5)

// Keep generating a random number between 1 and 10 until you get 7.

// let random;
// do{
//     random = Math.floor(Math.random() * 10) +1
//     console.log(random)
// } while(random !== 7)
//     console.log("I got a 7!")

    // Write a do-while loop that generates a random number between 1 and 100 
    // and keeps generating new random numbers until you get a number greater than 90. Log the numbers to the console.

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random()*100) +1
        console.log(randomNumber)
    }while(randomNumber < 90)
        console.log("I got a number above 90!")
