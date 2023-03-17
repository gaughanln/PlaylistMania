const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');


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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static(path.join(__dirname, "/public/images")));

app.use(routes);


// SERVER WILL ONLY RUN AT THE MOMENT WITH THESE THINGS COMMENTED OUT




// const listEndpoints = require('express-list-endpoints');
// console.log(listEndpoints(app));
//delte later ^^^

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
  //console.log(PORT); //idk why the ports are different from the config connections stuff
});