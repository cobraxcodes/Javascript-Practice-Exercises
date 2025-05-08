// SYNTAX

// switch (expression) {
//     case argument:
//       // code to be executed if the expression matches value1
//       break;  // Optional: exits the switch
//     case argument:
//       // code to be executed if the expression matches value2
//       break;
//     case argument:
//       // code to be executed if the expression matches value3
//       break;
//     default:
//       // code to be executed if none of the above cases match
//       // Optional: if no match is found
//   }
  
// Challenge 1: Day of the Week

// Write a switch statement that takes the day of the week as a string and logs:

// "Start of the workweek!" if the day is "Monday".
// "Midweek!" if the day is "Wednesday".
// "It's Friday!" if the day is "Friday".
// "Weekend!" for any day between Saturday and Sunday (use default to handle this).
let day = "Sunday"
    switch(day){
        case "Sunday":
            console.log("It's Sunday!");
            break;
        case "Monday":
            console.log("Happy Monday!")
            break;
        case "Tuesday":
            console.log("It's Taco Tuesday!")
            break;
        case "Wednesday":
            console.log("Happy Hump Day")
            break;
        case "Thursday":
            console.log("Happy Friday Junior!")
            break;
        case "Friday":
            console.log("Thank God It's Friday")
            break;
        case "Saturday":
            console.log("Happy Saturday! Ready for the Weekend!")
            break;
        default:
            console.log("I hope it's Friday!")
    }
// Challenge 2: Traffic Light

// Write a switch statement that takes a traffic light color (red, yellow, or green) as input and outputs the appropriate message:
// "Stop" if the light is red.
// "Caution" if the light is yellow.
// "Go" if the light is green.


let light = "red"

switch(light){
    case "red":
        console.log("Stop!")
        break;
    case "yellow":
        console.log("Caution!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Caution!")
}




// Challenge 3: Month to Season

// Write a switch statement that takes a month (1 to 12) as input and logs the corresponding season:

// "Winter" for months December, January, and February.
// "Spring" for March, April, and May.
// "Summer" for June, July, and August.
// "Fall" for September, October, and November.
let month = 7;
switch (month){
    case 12:
    case 1:
    case 2:
         console.log("Get Your Mittens Out! It's Winter Time!")
         break;
    case 3:
    case 4:
    case 5:
        console.log("Look Out For The Pollen, It's Spring Time!");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Come Outside, It's Summer Time!");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Trick Or Treat! It's Fall!")
}

// Challenge 4 : Beverage Size

// Write a switch statement that takes a string input representing a beverage size ("small", "medium", or "large") and logs:
// "Small size selected" for "small".
// "Medium size selected" for "medium".
// "Large size selected" for "large".
// "Invalid size" if any other input is provided.

let size = "large"

switch(size){
    case "small":
        console.log("Small sized beverage coming up!");
        break;
    case "medium":
        console.log("Regular sized drink, coming up!")
        break;
    case "large":
        console.log("Large drinky drink coming up for pookie in pink")
        break;
    default:
        console.log("Invalid size")

}
