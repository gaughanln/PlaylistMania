const exphbs = require('express-handlebars');

const express = require('express');
const router = express.Router();


router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/artist', (req, res) => {
  res.render('artist');
});

router.get('tracks', (req, res) => {
  res.render('tracks');
});

router.get('/playlists', (req, res) => {
  res.render('playlists');
});

module.exports = router;