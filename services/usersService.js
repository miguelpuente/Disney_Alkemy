const Sucursal = require("../db/models/Sucursal");
const User = require("../db/models/User");
const UserPuesto = require('../db/models/UserPuesto');


const options =  {
        include: [
            {
                model: Sucursal,
                required: false
            },
            {
                model: UserPuesto,
                required: false
            },
        ],
        order:[
            [ 'apellido', 'ASC']
        ],
    };



const getUsers = async( offset = 0, limit = 10 ) => {

    const usuarios = await User.findAll(options);

    return usuarios

}

const getUsersPuesto = async ( usuario_id ) => {

    const puestos = await UserPuesto.findAll({ where:{ usuario_id } });

}


const getUsersCount = async() => {

    const cantidad = await User.findAndCountAll();

    return cantidad.count

}

module.exports = {
    getUsers,
    getUsersCount,
    getUsersPuesto
}