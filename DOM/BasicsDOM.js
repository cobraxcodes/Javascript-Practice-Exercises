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

// Write a script that changes the background color of the body when a button is clicked.
const colorChange = () =>{
    document.body.style.backgroundColor= "#E88EED";
}
const colorAgain = () =>{
    document.getElementById("changeBodyColorBtn").textContent= "Keep Clicking!"
}
const colorThree = () =>{
    document.body.style.backgroundColor= "pink";
}
// MAIN BODY COLOR CHANGER
const mainBodyColorChanger = () =>{
    colorChange()
    setTimeout(colorAgain, 1000)
    setTimeout(colorThree, 3000)
    setTimeout(colorChange, 5000)
}


document.getElementById('changeBodyColorBtn').addEventListener('click', mainBodyColorChanger)

// Write a script that changes the background color of an element when a button is clicked.
const boxColorBtn = ()=>{
    document.getElementById('colorBox').style.backgroundColor = "white"
}
document.getElementById('changeBox').addEventListener('click', boxColorBtn)


// Write a script that creates a new p element with some text and adds it to the body when a button is clicked.
// To create dynamic element. use .createElement() and add context using .textContext() and append(attach) document.body.appendChild(createElementVariable)
const createElement = () =>{
    let dynamicElement = document.createElement('p')
    dynamicElement.textContent="Hi, I was dynamically made. Thank you for making Me!"
    document.body.appendChild(dynamicElement)
}
document.getElementById('createBtn').addEventListener('click', createElement)