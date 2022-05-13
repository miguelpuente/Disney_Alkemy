const { response, request } = require("express");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const User = require("../db/models/User");


const validarToken = (req, res = response) => {

    res.json({ ok: true , usuario: req.usuario });

}


const login = async( req = request, res = response) => {

    const { email, password } = req.body;

    try {

        // Verificar si el email existe
        const usuario = await User.scope('activo').findOne({ where:{ email } });

        if ( !usuario ) {

            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - Email',
            })

        }

        // Verificar la contraseña

        const validPassword = bcryptjs.compareSync( password, usuario.password );

        if ( !validPassword ) {

            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - Password',
            })

        }

        // Generar el JWT

        const idToken = await generarJWT( usuario.id );

        const  user = {
            "nombre": usuario.nombre,
            "email": usuario.email
        };

        res.json({
            user,
            idToken
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }


}

module.exports = {
    login,
    validarToken
}