// import controllers character
const moviecharacterController = require('../controllers/moviecharacterController.js')

// router
const router = require('express').Router()



// use routers
router.post('/', moviecharacterController.addMoviecharacter)

router.get('/', moviecharacterController.getAllMoviecharacters)

router.get('/:id', moviecharacterController.getOneMoviecharacter)

router.put('/:id', moviecharacterController.updateMoviecharacter)

router.delete('/:id', moviecharacterController.deleteMoviecharacter)

module.exports = router