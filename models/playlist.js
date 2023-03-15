const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model {}

Playlist.init({
    id: { //User own a playlist
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist'
  });
  
module.exports = Playlist;