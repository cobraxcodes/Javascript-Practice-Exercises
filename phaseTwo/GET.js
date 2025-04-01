// Basic Syntax
fetch(url)
.then(result => result.json())
.then(data => console.log(data))
.catch(error => console.log("Failed to fetch data", error))