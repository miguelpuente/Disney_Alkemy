const { DataTypes } = require('sequelize');
const db = require('../config/db-config');

const Character  = db.define('character',{

    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.TINYINT
    },
    weight: {
        type: DataTypes.FLOAT
    },
    history: {
        type: DataTypes.TEXT
    }

})

module.exports = Character
