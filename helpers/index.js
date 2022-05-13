const dbValidators = require('./db-validators');
const generarJWT = require('./generar-jwt');
const subirArchivo = require('./uploads-archivo');






module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...subirArchivo,
}