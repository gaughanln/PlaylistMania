const router = require('express').Router();
const { Song } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const songData = await Song.findAll();
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {   
    try {
        const songData = await Song.findByPk(req.params.id);
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const songData = await Song.create({
            song_name: req.body.song_name,
            artist: req.body.artist,
            genre: req.body.genre,
            album: req.body.album
        });
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const songData = await Song.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const songData = await Song.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(songData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;