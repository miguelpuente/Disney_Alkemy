const { response } = require('express');
const path = require('path');
const fs = require('fs');

const { subirArchivo } = require('../helpers');
const User = require('../db/models/User');


const cargarArchivo = async(req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({msg: 'No hay archivos que subir'});
        return;
    }

    try {
        const nombre = await subirArchivo(req.files, undefined, 'imgs');
        res.json({ nombre })
    } catch(msg) {
        res.status(400).json({ msg });
    }
}

const actualizarImagen = async (req, res = response) => {

    const { id, coleccion } = req.params;
    let modelo;

    switch ( coleccion ) {
        case 'User':
            modelo = await User.findByPk(id);
            if (!modelo){
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${ id }`
                });
            }npm
        break;
        case 'Empresa':
            modelo = await empresas.findById(id);
            if (!modelo){
                return res.status(400).json({
                    msg: `No existe una empresa con el id ${ id }`
                });
            }
        break;
        default:
            return res.status(500).json({msg: 'Se me olvidó validar esto :)'});
    }

    const nombre = await subirArchivo( req.files, undefined, coleccion );
    modelo.img = nombre;
    await modelo.save();

    res.json({ modelo })
}



const mostrarArchivo = ( req, res = response ) => {

    const { tipo_archivo, tipo_registro, nombre } = req.params;

    // const pathArchivo = path.join(__dirname, '../uploads', carpeta, instancia.img )
    const pathArchivo = path.join( __dirname, '../uploads', tipo_archivo, tipo_registro, nombre )

    if ( fs.existsSync(pathArchivo) ) {
        return res.sendFile( pathArchivo );
    }


    res.json({
        msg: 'falta place holder'
    })

}

module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarArchivo
}