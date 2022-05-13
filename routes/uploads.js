const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen, mostrarArchivo } = require('../controllers/uploads');
const { validarCampos } = require('../middlewares');
const { coleccionesPermitidas } = require('../helpers');

const router = Router();

router.post('/', cargarArchivo);

router.put('/:coleccion/:id', [
    check('id', 'El id debe ser de mysql').isUUID(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['User', 'Empresa'])),
    validarCampos
], actualizarImagen );


router.get('/:tipo_archivo/:tipo_registro/:nombre',[
    check('tipo_archivo', 'El es obligatorio').not().isEmpty(),
    check('tipo_registro', 'El es obligatorio').not().isEmpty(),
    check('nombre', 'El es obligatorio').not().isEmpty(),
    validarCampos
], mostrarArchivo );

module.exports = router;