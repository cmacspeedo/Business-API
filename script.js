
const myAPI = 'https://iskarr.github.io/austindonovan.github.io/api/business.json'
let container = document.getElementById('container')

fetch(myAPI)
.then((response) => response.json())
.then((jsObject) => {
var list = jsObject.business
for (let i = 0; i < list.length; i++) {
    // const element = list[i];
    console.log(list[i]);
     // Create a div with a card class
     const card = document.createElement('div');
     card.setAttribute('class', 'card')
     container.appendChild(card);

      // add image
      const image = document.createElement("img");
      image.setAttribute('class','card__image')
      image.setAttribute('src', image.innerText = list[i].imageurl)
      card.appendChild(image);

     // Add name to each card
     const name = document.createElement("h4");
     name.setAttribute('class','card__content')
     name.innerText = list[i].name
     card.appendChild(name);
  
     // add description
     const description = document.createElement("p");
     description.setAttribute('class','card__content')
     description.innerText = list[i].description
     card.appendChild(description);

     // add address
     const address = document.createElement("p");
     address.setAttribute('class','address')
     address.innerText = list[i].address
     card.appendChild(address);

 
   };
})

   //  // add dynamic link
    //  const link = document.createElement("p");
    //  link.setAttribute('class','card__info')
    //  link.innerText = list[i].link
    //  card.appendChild(link);

// const image = document.createElement('div');
// image.setAttribute('class', 'card__image')

// // Create an h4 and set the text content to name
// const h4 = document.createElement('h4')
// h4.textContent = list.name

// Create a p and set the text content to the description
// const p = document.createElement('p')
//  list.description = list.description.substring(0, 300) // Limit to 300 chars
//  p.textContent = `${list[i].description}...` // End with an ellipses

 // Append the cards to the container element
//  container.appendChild(card)
 
 // Create dynamic href
//  const googleLink = `https://www.google.com/search?q=${list.name}`
//  console.log(googleLink)

 // Each card will contain an h1 and a p
//  card.appendChild(h1)
//  card.appendChild(p)