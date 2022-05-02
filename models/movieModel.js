module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define("movie", {
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

    return Movie

}