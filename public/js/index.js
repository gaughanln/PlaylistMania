const apiUrl = 'https://itunes.apple.com/search?';
let term = ''; //[genre]
const media = 'music';
const entity = 'song';

// https://itunes.apple.com/search?term=[genre]&entity=song

const fetchData = async (genre) => {
  const searchUrl = `${apiUrl}term=${genre}&media=${media}&entity=${entity}&attribute=genreTerm`;
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


document.querySelector('.genre-buttons').addEventListener('click', async (event) => {
  if (event.target.classList.contains('genre-button')) {
    const genre = event.target.dataset.genre;
    const data = await fetchData(genre);
    displayData(data);
  }
});



// document.querySelector('.genre-buttons').addEventListener('click', async (event) => {
//   if (event.target.classList.contains('genre-button')) {
//     const genre = event.target.dataset.genre;
//     const data = await fetchData(genre);
//     console.log(data);
//   }
// });