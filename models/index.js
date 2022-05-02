const dbConfig = require('../config/dbConfig.js')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.characters = require('./charactersModel.js')(sequelize, DataTypes)
db.genres = require('./genresModel.js')(sequelize, DataTypes)
db.moviecharacters = require('./moviecharactersModel.js')(sequelize, DataTypes)
db.movies = require('./movieModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('re-sync done!')
})

// Relation

db.characters.belongsToMany(db.movies, {
    through: 'moviecharacter',
    as: 'movie',
    foreingnKey: 'character_id'
})

db.genres.hasMany(db.movies, {
    foreignKey: 'genre_id',
    as: 'movie'
})

db.movies.belongsTo(db.genres, {
    foreignKey: 'genre_id',
    as: 'genre'
})

db.movies.belongsToMany(db.characters, {
    through: 'moviecharacters',
    as: 'characters',
    foreingnKey: 'movie_id'
})

module.exports = db