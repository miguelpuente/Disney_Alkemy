const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const Movie = db.movies

// main work

// 1. create movie

const addMovie = async (req, res) => {

    let info = {
        image: req.file.path,
        title: req.body.title,
        creation_date: req.body.creation_date,
        qualification: req.body.qualification,
        genre_id: req.body.genre_id
    }

    const movie = await Movie.create(info)
    res.status(200).send(movie)
    console.log(movie)

}



// 2. get all movies

const getAllMovies = async (req, res) => {

    let movies = await Movie.findAll({})
    res.status(200).send(movies)

}



// 3. get single movie

const getOneMovie = async (req, res) => {

    let id = req.params.id
    let movie = await Movie.findOne({ where: { id: id }})
    res.status(200).send(movie)

}



// 4. update movie

const updateMovie = async (req, res) => {

    let id = req.params.id

    const movie = await Movie.update(req.body, { where: { id: id }})

    res.status(200).send(movie)

}



// 5. delete movie by id

const deleteMovie = async (req, res) => {

    let id = req.params.id
    
    await Movie.destroy({ where: { id: id }} )

    res.status(200).send('Movie is deleted !')

}



// 6. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')



module.exports = {
    addMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie,
    upload
    
}