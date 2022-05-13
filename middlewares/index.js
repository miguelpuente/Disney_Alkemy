const validarCampos  = require('../middlewares/validar-campos');
const validarJWT  = require('../middlewares/validar-jwt');
const validarSchemas = require('../middlewares/validar-schemas');
const logger = require('../middlewares/logger');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarSchemas,
    ...logger
}