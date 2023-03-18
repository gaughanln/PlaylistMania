const exphbs = require('express-handlebars');

const express = require('express');
const router = express.Router();


router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/genres', (req, res) => {
  res.render('genres');
});

router.get('/playlists', (req, res) => {
  res.render('playlists');
});

module.exports = router;