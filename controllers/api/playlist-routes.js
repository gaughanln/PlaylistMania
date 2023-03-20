const router = require('express').Router();
const { Playlist } = require('../../models');

router.post('/playlist', async (req, res) => {
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

router.get('/playlist', async (req, res) => {
    try {
      const playlistData = await Playlist.findAll();
      res.status(200).json(playlistData);
      res.render('playlist');
    } catch(err) {
      res.status(500).json(err)
    }
  });

    router.get('/playlist/:id', async (req, res) => {
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