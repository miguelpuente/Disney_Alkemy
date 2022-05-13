const { DataTypes } = require('sequelize');
const db = require('../config/db-config');

const Genre  = db.define('genre',{

    name: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    }

});

module.exports = Genre