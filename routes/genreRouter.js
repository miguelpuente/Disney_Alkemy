// import controllers genre
const genreController = require('../controllers/genreController.js')

// router
const router = require('express').Router()



// use routers
router.post('/', genreController.upload , genreController.addGenre)

router.get('/', genreController.getAllGenres)

router.get('/:id', genreController.getOneGenre)

router.put('/:id', genreController.updateGenre)

router.delete('/:id', genreController.deleteGenre)

module.exports = router