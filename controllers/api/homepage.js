const express = require('express');
const exphbs = require('express-handlebars');

app.get('/', function(req, res) {
  res.render('homepage');
});