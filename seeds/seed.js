const sequelize = require('../config/connections');
const User = require('../models/user');

const userData = require('./user.json');

const bcrypt = require('bcrypt');

const seedUsers = async () => {
    await sequelize.sync({ force: true});

    const users = await Promise.all(
        userData.map(async user => {
          user.password = await bcrypt.hash(user.password, 10);
          return user;
        })
    );

    await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
      });

      process.exit(0);
}

seedUsers();