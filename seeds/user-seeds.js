const sequelize = require('../config/connections');
const User = require('../models/user');
const userData = require('./users.json');


const bcrypt = require('bcrypt'); // i need it to hash it. when i seed it

const seedUsers = async () => {
    await sequelize.sync({ force: true});

    //this is where the hashing will be goings
    const users = await Promise.all(
        userData.map(async user => {
          user.password = await bcrypt.hash(user.password, 10);
          return user;
        })
    );

    await User.bulkCreate(users); //add it all to database
}


module.exports = seedUsers;