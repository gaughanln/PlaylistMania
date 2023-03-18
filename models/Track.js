const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const Track = sequelize.define('Track', {
    trackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    trackName: { 
        type: DataTypes.STRING, 
        allowNull: false
    },
    artistName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    collectionName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trackPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'tracks',
    timestamps: false
})

module.exports = Track;