// // the plus sign button
// const favoriteBtn = document.querySelector(".favorite")

// favoriteBtn.addEventListener('click', () => {
//   const trackName = result.trackName;
//   const artistName = result.artistName;
//   const collectionName = result.collectionName;
//   const audioPlayer = result.previewUrl;

//   localStorage.setItem('trackName', trackName);
//   localStorage.setItem('artistName', artistName);
//   localStorage.setItem('collectionName', collectionName);
//   localStorage.setItem('audioPlayer', audioPlayer);
// });

// const trackName = localStorage.getItem("trackName"); 
// const artistName = localStorage.getItem("artistName");
// const collectionName = localStorage.getItem("collectionName");
// const audioPlayer = localStorage.getItem("audioPlayer");

// // need a route to get this to the playlist page
// const showFavs = `
// <div class="card purple accent-4 waves-effect">
// <div class="center-align card-content white-text">
//   <span class="card-title">${result.trackName}</span>
//     <div class="card-content">
//       <p>Artist: ${result.artistName}</p>
//       <p>From the album ${result.collectionName}</p>
//         <audio controls>
//           <source src="${result.previewUrl}" type="audio/mpeg" />
//         </audio>
//     </div>
//       <a class="btn-floating fab waves-effect waves-light purple lighten-1 favorite">
//         <i class="material-icons">delete</i>
//       </a>
//     </div>
// </div>`


// template literal for card on playlist page that shows a delete button instead of a + button
// `<div class="card purple accent-4 waves-effect">
// <div class="center-align card-content white-text">
//   <span class="card-title">${result.trackName}</span>

//   <div class="card-content">
//     <p>Artist: ${result.artistName}</p>
//     <p>From the album ${result.collectionName}</p>

//     <audio controls>
//       <source src="${result.previewUrl}" type="audio/mpeg" />
//     </audio>
//   </div>
//   <a
//     class="btn-floating fab waves-effect waves-light purple lighten-1 favorite"
//     ><i class="material-icons">delete</i></a
//   >
// </div>
// </div>`

const favDiv = document.querySelector("#favorites");

for (var i = 0; i < localStorage.length; i++) {
    // Get the key of the current item
    var key = localStorage.key(i);
  
    // Get the value of the current item
    var value = localStorage.getItem(key);

    var divEl = document.createElement("div");
    divEl.innerHTML = value;

    favDiv.appendChild(divEl);
}

