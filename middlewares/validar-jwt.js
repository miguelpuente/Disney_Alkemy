const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../db/models/User');


const validarJWT = async ( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }


    try {

        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        const usuario = await User.findByPk( uid );

        if ( !usuario ){
            return res.status(401).json({
                msg: 'Token no valido - Usuario con estado false'
            });
        }

        req.usuario = usuario;
        
        next();  

    } catch (error) {

        console.log(error)

        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarJWT
}