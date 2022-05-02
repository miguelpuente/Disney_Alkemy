// import controllers character
const movieController = require('../controllers/movieController.js')

// router
const router = require('express').Router()



// use routers
router.post('/', movieController.upload , movieController.addMovie)

router.get('/', movieController.getAllMovies)

router.get('/:id', movieController.getOneMovie)

router.put('/:id', movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

module.exports = router