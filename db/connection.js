const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs');
const db = require('./config/db-config');
const process = require('process');

const Character = require('./models/charactersModel');
const Genre = require('./models/genreModel');
const Movie = require('./models/movieModel');

const cargar_modelos = () => {

  fs
  .readdirSync(__dirname+'/models')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  }).forEach(file => {
    const model = require('./models/'+file);
  });

};

// Relaciones
const crear_relaciones = () => {

  Character.belongsToMany(Movie, {
    through: 'moviecharacter',
    as: 'movie',
    foreingnKey: 'characterId'
  })

  Genre.hasMany(Movie, {
    foreignKey: 'genreId',
    as: 'movie'
  })

  Movie.belongsTo(Genre, {
    foreignKey: 'genreId',
    as: 'genre'
  })

  Movie.belongsToMany(Character, {
    through: 'moviecharacters',
    as: 'characters',
    foreingnKey: 'movieId'
  })
  
};

if (process.env.NODE_ENV = 'development' &&  process.env.DOTO_MIGRATION )  {
  cargar_modelos();
  crear_relaciones();
}

module.exports = db