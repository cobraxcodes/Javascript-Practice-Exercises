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

// Write a script that creates a new p element with some text and adds it to the body when a button is clicked.

