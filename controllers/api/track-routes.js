const router = require('express').Router;
const { Track } = require('../models');

// get  a list of tracks by artist name
router.get('/api/tracks/:artist', async (req, res) => {
    const artistName = req.params.artist;
    const url = `https://itunes.apple.com/search?term=${artistName}&entity=song&limit=10`;
    const response = await fetch(url);

    const tracks = response.data.results.map(track => {
        return {
            trackId: track.trackId,
            trackName: track.trackName,
            artistName: track.artistName,
            collectionName: track.collectionName,
            trackPrice: track.trackPrice
        }
    })
    await Track.bulkCreate(tracks, { ignoreDuplicates: true });
    const foundTracks = await Track.findAll({ where: { artistName: artistName } });
    res.json(foundTracks);
})

module.exports = router;