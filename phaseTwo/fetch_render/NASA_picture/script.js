// API: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// Goal: Display the APOD with:

// Title
// Image
// Description
// Date

fetch("https://api.nasa.gov/planetary/apod?api_key=M8BARK7p4Dke7weFzONxDkFC7eeeDsZ9eBepcHx8")
.then(res => res.json())
.then(res => {
     // IMAGE
   const imageDoc = document.createElement('img')
   imageDoc.src = res.url
   imageDoc.id = 'img'
   apodContainer.appendChild(imageDoc)
     // TITLE
   const titleDoc = document.createElement('h3')
   titleDoc.textContent = res.title
   apodContainer.appendChild(titleDoc)
   //   DATE
   const dateDoc = document.createElement('p')
   dateDoc.textContent= res.date
   apodContainer.appendChild(dateDoc)

    // DESCRIPTION
    const des = res.explanation
    const desDoc = document.createElement('p')
    desDoc.textContent = des
    desDoc.id = 'description'
    apodContainer.appendChild(desDoc)

})