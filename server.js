const express = require('express');
const session = require('express-session');
const routes = require('./controllers');


const exphbs = require('express-handlebars');



const sequelize = require('./config/connections');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helper = require('./utils/helper')


const app = express();
const PORT = process.env.PORT || 3002;

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

const hbs = exphbs.create({ helper });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// SERVER WILL ONLY RUN AT THE MOMENT WITH THESE THINGS COMMENTED OUT

app.use(routes);


// const listEndpoints = require('express-list-endpoints');
// console.log(listEndpoints(app));
//delte later ^^^

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
  console.log(PORT); //idk why the ports are different from the config connections stuff
});