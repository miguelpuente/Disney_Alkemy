const { Router } = require('express');
const { check } = require('express-validator');
const { login, validarToken } = require('../controllers/authController');
const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.post('/login',[
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('email','El correo debe ser válido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min:6 }),
    validarCampos
], login );

router.post('/validarjwt',[ validarJWT ], validarToken )

module.exports = router;