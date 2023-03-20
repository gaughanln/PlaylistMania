const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1', // mac version of localhost
      //host: 'localhost', // windows version of localhost
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;