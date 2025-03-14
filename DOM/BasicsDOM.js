// Write a script that changes the text content of an HTML element with a specific ID.
const testBtn = () =>{
    document.getElementById("message").textContent="Hi, Friend!";
}

const dbleClick = () =>{
    document.getElementById("changeTextButton").textContent="No Click No More";
}
const btnHover = () =>{
    document.getElementById("changeTextButton").textContent="Double Click Me";
}
const warning = () =>{
    document.getElementById("message").textContent="You FAKA!";
}

document.getElementById("changeTextButton").addEventListener('click', testBtn)
document.getElementById("changeTextButton").addEventListener('mouseover', btnHover)
document.getElementById("changeTextButton").addEventListener('dblclick', dbleClick)
document.getElementById("changeTextButton").addEventListener('dblclick', warning)

// Write a script that changes the background color of an element when a button is clicked.
const colorChange = () =>{
    document.body.style.backgroundColor= "#E88EED";
}
const colorAgain = () =>{
    document.getElementById("changeBodyColorBtn").textContent= "Keep Clicking!"
}
const colorThree = () =>{
    document.body.style.backgroundColor= "#D6D9CE";
}
const colorFour = () =>{
    document.body.style.backgroundColor= "#D6D9CE";
}
const colorFive = () =>{
    document.body.style.backgroundColor= "#C4E0F9";
}


document.getElementById('changeBodyColorBtn').addEventListener('click', colorChange)
document.getElementById('changeBodyColorBtn').addEventListener('click', colorAgain)
document.getElementById('changeBodyColorBtn').addEventListener('click', colorThree)
document.getElementById('changeBodyColorBtn').addEventListener('click', colorFour)
document.getElementById('changeBodyColorBtn').addEventListener('click', colorFive)




// Write a script that creates a new p element with some text and adds it to the body when a button is clicked.

