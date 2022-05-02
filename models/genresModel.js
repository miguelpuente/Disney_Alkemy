module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define("genre", {
        name: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        }
    })

    return Genre

}