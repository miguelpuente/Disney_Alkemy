module.exports = (sequelize, DataTypes) => {

    const Character = sequelize.define("character", {
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

    return Character

}