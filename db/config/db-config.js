const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

const db = new Sequelize(
    config.database,
    config.username,
    config.password,
    config);


    db.sync({ alter:true, match: /_dev$/ });


module.exports = db