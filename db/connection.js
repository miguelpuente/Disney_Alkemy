const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs');

const db = require('./config/db-config');
const process = require('process');

const cargar_modelos = () => {

  fs
  .readdirSync(__dirname+'/models')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  }).forEach(file => {
    const model = require('./models/'+file);
  });

};

if (process.env.NODE_ENV = 'development' &&  process.env.DOTO_MIGRATION )  {
  cargar_modelos();
}

module.exports = db