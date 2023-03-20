const apiUrl = "https://itunes.apple.com/search?";
let term = ""; //[artist]
const media = "music";
const entity = "song";

const fetchData = async (artist) => {
  const searchUrl = `${apiUrl}term=${artist}&media=${media}&entity=${entity}&attribute=genreIndex`;
  console.log(searchUrl);

  const response = await fetch(searchUrl);

  const data = await response.json();
  return data;
};
const displayData = (data) => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  // Shuffle the array of results
  const shuffledResults = data.results.sort(() => Math.random() - 0.5);

  // Only display  x amount of results
  const slicedResults = shuffledResults.slice(0, 9);

  slicedResults.forEach((result) => {
    const resultEl = document.createElement("div");

    const cardEl = document.createElement("div");
    cardEl.classList.add("card", "purple", "accent-4", "waves-effect");

    const divEl = document.createElement("div");
    divEl.classList.add("center-align", "card-content", "white-text");

    const spanEl = document.createElement("span");
    spanEl.classList.add("card-title");
    spanEl.innerHTML = `${result.trackName}`

    const divContentEl = document.createElement("div");
    divContentEl.classList.add("card-content");

    const aritstNameEl = document.createElement("p");
    aritstNameEl.innerHTML = `Artist: ${result.artistName}`;
    aritstNameEl.classList.add("artist");

    const albumNameEl = document.createElement("p");
    albumNameEl.innerHTML = `From the album ${result.collectionName}`;
    albumNameEl.classList.add("album");

    var audioDivElement = document.createElement('div');
    audioDivElement.classList.add("audioDiv");
    audioDivElement.innerHTML = `
      <audio controls class="audio">
        <source class="source" src="${result.previewUrl}" type="audio/mpeg" />
      </audio>`;

    var buttonElement = document.createElement('button');
    buttonElement.classList.add("fav-btn");
    buttonElement.addEventListener('click', function(event) {
      event.preventDefault();
      var parent = buttonElement.parentElement;
      //console.log(parent);
      var greatGrandParent = parent.parentElement.parentElement;

      //console.log(greatGrandParent);

      const title = greatGrandParent.querySelector(".card-title");
      //console.log(title.textContent);
      const artist = greatGrandParent.querySelector(".artist");
      const album = greatGrandParent.querySelector(".album");
      const url = greatGrandParent.querySelector(".source").getAttribute("src");

      // template literal for playlist cards
      const htmlData = 
      `
      <div class="card purple accent-4 waves-effect">
      <div class="center-align card-content white-text">
        <span class="card-title">${title.textContent}</span>
        <div class="card-content">
          <p class="artist">${artist.textContent}</p>
          <p class="album">${album.textContent}</p>
          <div class="audioDiv">
            <audio controls class="audio">
              <source class="source" src=${url} type="audio/mpeg">
            </audio>
          </div>
          <br>
          <a class="btn-floating fab waves-effect waves-light purple lighten-1 favorite">
            <i class="material-icons trash">delete</i>
          </a>
        </div>
      </div>
    </div>`;

      localStorage.setItem(title.textContent, htmlData);
      buttonElement.remove();
    });

    var aElement = document.createElement('a');
    aElement.className = 'btn-floating fab waves-effect waves-light purple lighten-1 fav-btn';

    var iElement = document.createElement('i');
    iElement.className = 'material-icons';
    iElement.textContent = 'add';

    aElement.appendChild(iElement);
    

    divContentEl.appendChild(aritstNameEl);
    divContentEl.appendChild(albumNameEl);
    divContentEl.appendChild(audioDivElement);

    buttonElement.appendChild(aElement);
    divContentEl.appendChild(buttonElement);
    
    divEl.appendChild(spanEl);
    divEl.appendChild(divContentEl);
    cardEl.appendChild(divEl);
    resultEl.appendChild(cardEl);

    resultsContainer.appendChild(resultEl);

  });
};

document
  .querySelector(".artist-btn")
  .addEventListener("click", async (event) => {
    console.log("thisworks!?");
    var search = document.querySelector(".search-input");
    const data = await fetchData(search.value);
    console.log(data);
    displayData(data);
  });

// need to add favorites button to route the results to the next page (playlist)
