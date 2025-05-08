// Challenge 1: Object Manipulation
// Create an object called book with properties title, author, and year. Then, log the book’s title and author.
const book = {
    title : "Harry Potter",
    author : "J.K. Rowling",
    year : 2001

}
console.log(book.author)
console.log(book.title)
console.log(`I love the book ${book.title} written by ${book.author}`)

// Create an object student with name, age, and grade properties. Update the grade property and log the updated object.
const student = {
    name: "Anna",
    age: 17,
    grade: "C"
}
student.grade = "A"
console.log(student.grade)
// Challenge 1: Person Information
// Create an object person with the following properties:
// name: Your name
// age: Your age
// isStudent: A boolean representing if you're a student or not
// address: An object with city, state, and zipCode properties
// Then, log:
// The name and age of the person.
// The city and state from the address object.

const personalInformation = {
    name : "Bailey Girl",
    age: 7,
    isStudent: true,
    address:{
        city: "Kaawa",
        state: "Hawaii",
        zipcode: 808212
    }

}
console.log(personalInformation.name)
console.log(personalInformation.age)
console.log(personalInformation.address.city)
console.log(personalInformation.address.state)

// Challenge 2: Book Collection
// Create an array of objects where each object represents a book with the following properties:
// title: Book title
// author: Author name
// year: Year of publication
// Then, loop through the array and log each book's title and author.
const bookCollection = [
    {
        title: "I am who i am",
        author: "Unknown",
        year: 1972
    },
    {
        title: "Snapple",
        author: "Tea",
        year: 1988
    },
    {
        title: "Salem's Lot",
        author: "Stephen King",
        year:  1978
    },
]
bookCollection.forEach(book=>{
    console.log(`The title of this book is ${book.title}, and the author is ${book.author} and was published on ${book.year}`)
})
for(let i = 0; i<bookCollection.length; i++){
    let collections = bookCollection[i]
    console.log(`The title of this book is ${collections.title} and the person who wrote this is ${collections.author} on ${collections.year}`)
}

// Challenge 3: Car Object
// Create a car object with the following properties:
// make: Car make (e.g., "Toyota")
// model: Car model (e.g., "Camry")
// year: Year of manufacture
// isElectric: Boolean indicating if the car is electric or not
// Add a method carDetails() that returns a string like: "The car is a 2020 Toyota Camry and it is electric."

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2009,
    isElectric: false,
    // can add a method inside an object
    carDetails(){
        console.log(`The car is a ${car.year} ${car.make} ${car.model} and is not electric`)
    }
    
}

// Then, call the carDetails() method.
car.carDetails()