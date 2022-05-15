const validarCampos  = require('../middlewares/validar-campos');
const validarJWT  = require('../middlewares/validar-jwt');
const validarSchemas = require('../middlewares/validar-schemas');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarSchemas
}