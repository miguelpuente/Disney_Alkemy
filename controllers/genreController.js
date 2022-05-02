const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Genre = db.genres

// main work



// 1. create genre

const addGenre = async (req, res) => {

    let info = {
        name: req.body.name,
        image: req.file.path
    }

    const genre = await genre.create(info)
    res.status(200).send(genre)
    console.log(genre)

}



// 2. get all genres

const getAllGenres = async (req, res) => {

    let genres = await Genre.findAll({})
    res.status(200).send(genres)

}



// 3. get single genre

const getOneGenre = async (req, res) => {

    let id = req.params.id
    let genre = await Genre.findOne({ where: { id: id }})
    res.status(200).send(genre)

}



// 4. update genre

const updateGenre = async (req, res) => {

    let id = req.params.id

    const genre = await Genre.update(req.body, { where: { id: id }})

    res.status(200).send(genre)

}



// 5. delete genre by id

const deleteGenre = async (req, res) => {

    let id = req.params.id
    
    await Genre.destroy({ where: { id: id }} )

    res.status(200).send('Genre is deleted !')

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
    addGenre,
    getAllGenres,
    getOneGenre,
    updateGenre,
    deleteGenre,
    upload

}