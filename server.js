const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connections'); //changed from connection to connections with an 's'
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret', // update this
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(routes); //gives me an error because of no code inside of controllers folder

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});