const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {   
    e.preventDefault();
    const artist = document.querySelector('#artist').value;
    const url = `/api/tracks/${artist}`;
    const response = await fetch(url);
    const tracks = await response.json();
    const trackList = document.querySelector('#track-list');
    trackList.innerHTML = '';
    tracks.forEach(track => {
        const li = document.createElement('li');
        li.innerHTML = `${track.trackName} - ${track.collectionName}`;
        trackList.append(li);
    })
})