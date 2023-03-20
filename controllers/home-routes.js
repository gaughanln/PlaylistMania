const exphbs = require('express-handlebars');
const { User } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/artist', withAuth, (req, res) => {
  res.render('artist', {
    logged_in: req.session.logged_in,
  });
});

router.get('/playlist', (req, res) => {
  res.render('playlist', {
    logged_in: req.session.logged_in,
});
});

module.exports = router;