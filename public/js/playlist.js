// template literal for card on playlist page that shows a delete button instead of a + button
`<div class="card purple accent-4 waves-effect">
<div class="center-align card-content white-text">
  <span class="card-title">${result.trackName}</span>

  <div class="card-content">
    <p>Artist: ${result.artistName}</p>
    <p>From the album ${result.collectionName}</p>

    <audio controls>
      <source src="${result.previewUrl}" type="audio/mpeg" />
    </audio>
  </div>
  <a
    class="btn-floating fab waves-effect waves-light purple lighten-1 favorite"
    ><i class="material-icons">delete</i></a
  >
</div>
</div>`