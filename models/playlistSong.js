const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class PlaylistSong extends Model {}

PlaylistSong.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'playlists',
        key: 'id',
      },
    },
    song_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'songs',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist_song',
  }
);

module.exports = PlaylistSong;