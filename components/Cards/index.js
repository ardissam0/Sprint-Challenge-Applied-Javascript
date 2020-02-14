// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log(response.data);
  cardMaker(response.data.articles)
  cardsContainer.appendChild(card);
})
.catch(err => {
  console.log(err);
});

function cardMaker(obj) {
  for(key in obj) {
    obj[key].forEach((article) => {
      cardsContainer.appendChild(createComponent(article))
    })
  }
}

function createComponent (writer) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const byAuth = document.createElement('span');
  
  cardsContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgDiv);
  imgDiv.appendChild(img);
  author.appendChild(byAuth);
  
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgDiv.classList.add('img-container');
  
  headline.textContent = writer.headline;
  img.src = writer.authorPhoto;
  byAuth.textContent = "By " + writer.authorName;
  
  return card;
}