const router = require('express').Router();
const { Playlist, PlaylistSong } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const playlistData = await Playlist.create({
        playlist_name: req.body.tag_name
      })
      res.status(200).json(playlistData);
    }
    catch(err) {
      res.status(500).json(err) 
    }
  });

router.get('/', async (req, res) => {
    try {
      const playlistData = await Playlist.findAll();
      res.status(200).json(playlistData);
    } catch(err) {
      res.status(500).json(err)
    }
  });

    router.get('/:id', async (req, res) => {
      try {
        const playlistData = await PlaylistSong.findByPk(req.params.id,{
          include: PlaylistSong
        });
        res.status(200).json(playlistData);
      } catch(err) {
        res.status(500).json(err) 
      }
      });

module.exports = router;