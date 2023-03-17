const apiUrl = 'https://itunes.apple.com/search?';
let term = ''; //[genre]
const media = 'music';
const entity = 'song';

// https://itunes.apple.com/search?term=[genre]&entity=song

const fetchData = async (artist) => {
  const searchUrl = `${apiUrl}term=${artist}&media=${media}&entity=${entity}&attribute=genreIndex`;
  console.log(searchUrl)

  const response = await fetch(searchUrl);

  const data = await response.json();
  return data;
}
const displayData = (data) => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  // Shuffle the array of results - still not showing how i want. need to shuffle through all songs, not randomize the same first results
  const shuffledResults = data.results.sort(() => Math.random() - 0.5);

  // Only display 15 results
  const slicedResults = shuffledResults.slice(0, 15);

  slicedResults.forEach((result) => {
    const resultEl = document.createElement("div");
    // do we want image? Need to update with materialize
    // route the results to the next page (playlist)
    resultEl.innerHTML = `
      <div>
        <img src="${result.artworkUrl100}" alt="${result.trackName} album cover">
        <p>Song title: ${result.trackName}</p>
        <p>Artist: ${result.artistName}</p>
        <p>From the album ${result.collectionName}</p>
    
        <audio controls>
          <source src="${result.previewUrl}" type="audio/mpeg">
        </audio>
      </div>
    `;
    resultsContainer.appendChild(resultEl);
  });
};


document.querySelector('.artist-btn').addEventListener('click', async (event) => {
  console.log('thisworks!?')
var search = document.querySelector('.search-input')
const data = await fetchData(search.value);
  console.log(data)
  displayData(data);
});



