// const seedPlaylists = require('./playlist-seeds');
// const seedPlaylistSongs = require('./playlistSong-seeds');
// const seedSongs = require('./song-seeds');
//these don't exist yet
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  // console.log('\n----- DATABASE SYNCED -----\n');
  // await seedPlaylists();
  // console.log('\n----- PLAYLISTS SEEDED -----\n');

  // await seedPlaylistSongs();
  // console.log('\n----- PLAYLIST SONGS SEEDED -----\n');

  // await seedSongs();
  // console.log('\n----- SONGS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
