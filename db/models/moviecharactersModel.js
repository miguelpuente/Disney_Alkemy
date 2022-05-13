const { DataTypes } = require('sequelize');
const db = require('../config/db-config');


const MovieCharacter  = db.define('moviecharacter',{

    movie_id: {
        type: DataTypes.INTEGER
    },
    character_id: {
        type: DataTypes.INTEGER
    }

});

module.exports = MovieCharacter