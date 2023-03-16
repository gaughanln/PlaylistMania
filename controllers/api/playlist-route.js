const router = require('express').Router();
const { Playlist, PlaylistSong } = require('../../models');

router.post('/', async (req, res) => {
    // create a new tag
    try {
      const tagData = await Playlist.create({
        tag_name: req.body.tag_name
      })
      res.status(200).json(tagData);
    }
    catch(err) {
      res.status(500).json(err) 
    }
  });

router.get('/', async (req, res) => {
  
    try { 
      const productData = await Playlist.findAll({
        include:[{model: Category }, {model: Tag }]
      });
      res.status(200).json(productData);
    } catch(err) {
      res.status(500).json(err);
    }
    });

    router.get('/:id', async (req, res) => {
      try {
        const tagData = await PlaylistSong.findByPk(req.params.id,{
          include: Product
        });
        res.status(200).json(tagData);
      } catch(err) {
        res.status(500).json(err) 
      }
      });