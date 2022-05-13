const { DataTypes } = require('sequelize');
const db = require('../config/db-config');


const User  = db.define('user',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'El password no debe ser vacío' }
        }
    },
    img: {
        type: DataTypes.STRING,
    },
});

module.exports = User