const { DataTypes } = require('sequelize');
const db = require('../config/db-config');


const Movie  = db.define('movie',{
    image: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    creation_date: {
        type: DataTypes.DATE
    },
    qualification: {
        type: DataTypes.TINYINT
    },
    genre_id: {
        type: DataTypes.INTEGER
    }
})

module.exports = Movie