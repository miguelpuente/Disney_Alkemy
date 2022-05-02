// import controllers character
const characterController = require('../controllers/characterController.js')

// router
const router = require('express').Router()



// use routers
router.post('/', characterController.upload , characterController.addCharacter)

router.get('/', characterController.getAllCharacters)

router.get('/:id', characterController.getOneCharacter)

router.put('/:id', characterController.updateCharacter)

router.delete('/:id', characterController.deleteCharacter)

module.exports = router