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


//   Destructure firstName and city from the user object.
//   Destructure manufacturer and battery from the product object.

  const user = {
    id: 1,
    personalInfo: {
      firstName: "Jane",
      lastName: "Doe",
      address: {
        city: "New York",
        zip: "10001"
      }
    }
  };
  
  const product = {
    name: "Smartphone",
    details: {
      manufacturer: "TechCorp",
      specs: {
        screen: "6.1 inch",
        battery: "4000mAh"
      }
    }
  };
  

const {personalInfo: {firstName, address:{city}}} = user
const {details: {manufacturer, specs:{battery}}}=product
console.log(firstName,city,manufacturer,battery)

  

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
const[nameFirst, lastName, age] = userInfo
console.log(`My name is ${nameFirst} ${lastName}, and I am ${age} years old.`)


// Nested Destructuring with Default Values & Rest Syntax
// Task:
// Destructure name, email, and theme from the userProfile object.
// Assign default values:
// If email is missing, default to "notfound@example.com".
// If theme is missing, default to "light".
// Also, use the rest operator to capture the remaining properties in contact, preferences, and address into their own variables.
// What should the output be?

// Print the following:
// The name and email values
// The theme value
// The remaining contact, preferences, and address objects
const userProfile = {
    name: 'Jane Doe',
    contact: {
      email: 'jane@example.com',
      phone: '123-456-7890'
    },
    preferences: {
      theme: 'dark',
      language: 'en',
      notifications: true
    },
    address: {
      street: '123 Elm St',
      city: 'Springfield'
    }
  };

  const {name, contact:{email}, preferences:{theme}} = userProfile
  console.log(name, email, theme)
  
  