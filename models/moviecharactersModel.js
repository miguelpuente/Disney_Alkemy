module.exports = (sequelize, DataTypes) => {

    const MovieCharacter = sequelize.define("moviecharacter", {
        movie_id: {
            type: DataTypes.INTEGER
        },
        character_id: {
            type: DataTypes.INTEGER
        }
    })

    return MovieCharacter

}