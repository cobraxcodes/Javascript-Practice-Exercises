// API: https://dog.ceo/api/breeds/image/random/5
// Goal: Fetch and display 5 random dog images in a responsive image grid.

// Bonus: Add a button to reload new dogs.

fetch("https://dog.ceo/api/breeds/image/random/5")
.then(res => res.json())
.then(res => {
    res.message.forEach(img =>{
        const imgDoc = document.createElement('img')
        imgDoc.src = img
        imgDoc.id = 'dogImages'
        dogContainer.appendChild(imgDoc)
    })
})
.catch(error => console.log(error))

function reload () {
    location.reload()
}

document.getElementById('dogsBtn').addEventListener('click', reload)