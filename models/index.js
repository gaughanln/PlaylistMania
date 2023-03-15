const User = require('./user');
const Playlist = require('./playlist');
const Song = require('./song');
const PlaylistSong = require('./playlistSong');

User.hasMany(Playlist, {
  foreignKey: 'user_id',
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

Playlist.belongsToMany(Song, { through: PlaylistSong });
Song.belongsToMany(Playlist, { through: PlaylistSong });

module.exports = { User, Playlist, Song, PlaylistSong };