const User = require("../db/models/User");

const existeUsuarioPorId = async( id = '' ) => {
    
    const usuario = await User.findByPk( id );

    if ( !usuario ) {
        throw new Error(`El usuario con el id ${ id } no existe`);
    }

}

const existeUsername = async( username = '' )=>{

    const existeEnDB = await User.findOne({ where:{ username } });

    if ( existeEnDB ) {
        throw new Error(`El nombre de usuario ${ username } ya existe`);
    }

}

const existeEmail = async( email = '' )=>{

    const existeEnDB = await User.findOne({ where:{ email } });

    if ( existeEnDB ) {
        throw new Error(`El email ${ email } ya existe`);
    }

}

/** 
*   Validar Colecciones permitidas
*/

const coleccionesPermitidas = (coleccion = '', colecciones = []) => {
    const incluida = colecciones.includes(coleccion);
    if ( !incluida ){
        throw new Error(`La coleción ${ coleccion } no es permitida, ${ colecciones }`);
    }
    return true;
}

module.exports = {
    existeEmail,
    existeUsuarioPorId,
    coleccionesPermitidas,
    existeUsername
}