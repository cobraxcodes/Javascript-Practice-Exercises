// DESTRUCTURING OBJECTS //

/* Challenge 1
You have this object:
✅ Task: Destructure title and author into separate variables and console.log them. */

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
  };
  
  const {title, author} = book
  console.log(title, author)
  
  
  
  /* Challenge 2
  You have this object:
  ✅ Task: Destructure ram and storage from inside specs, and log them both.
   */
  const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    specs: {
      ram: "16GB",
      storage: "512GB"
    }
  };
  
  const {ram,storage} = laptop.specs
  console.log(ram,storage)
  
  
  
  /* Challenge 3
  You have this object: */
  
  const employee = {
    name: "Sarah",
    position: "Developer",
    company: "TechCorp"
  };
  
  const {name:employeeName} = employee
  console.log(employeeName)
  /* ✅ Task: Destructure name, but rename it to employeeName when you do it.
  (So the variable is called employeeName, not name.)
  
  Challenge 4
  You have this object: */
  
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  const {year,make,model} = car
  console.log (`I drive a ${year} ${make} ${model}`)
  /* 
  
  ✅ Task: Destructure all three properties and create a sentence:
  "I drive a 2020 Toyota Corolla." */

  

  // ARRAY DESTRUCTURING // 
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const [firstCity, secondCity] = cities
console.log(firstCity,secondCity)
// Expected: "New York", "Los Angeles"


const colors = ["red", "blue", "green", "yellow"];
 // Expected: "red", "green"
 const [firstColor, , thirdColor]=colors
 console.log(firstColor, thirdColor)

const numbers = [10, 20, 30, 40, 50];
// Expected: [20, 30, 40, 50]
const [first, ...rest] = numbers
console.log(rest)

const fruits = ["apple"];
const [firstFruit, secondFruit="banana"] = fruits
console.log(firstFruit,secondFruit)
 // Expected: "apple", "banana"

const userInfo = ["John", "Doe", 30];
// Expected: "My name is John Doe, and I am 30 years old."
const[firstName, lastName, age] = userInfo
console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`)