const { DataTypes } = require('sequelize');
const db = require('../config/db-config');


const MovieCharacter  = db.define('moviecharacter',{

    movieId: {
        type: DataTypes.INTEGER
    },
    characterId: {
        type: DataTypes.INTEGER
    }

});

module.exports = MovieCharacter