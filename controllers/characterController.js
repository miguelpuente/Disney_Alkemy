const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Character = db.characters

// main work

// 1. create character

const addCharacter = async (req, res) => {

    let info = {
        image: req.file.path,
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        history: req.body.history
    }

    const character = await character.create(info)
    res.status(200).send(character)
    console.log(character)

}



// 2. get all characters

const getAllCharacters = async (req, res) => {

    let characters = await Character.findAll({})
    res.status(200).send(characters)

}



// 3. get single character

const getOneCharacter = async (req, res) => {

    let id = req.params.id
    let character = await Character.findOne({ where: { id: id }})
    res.status(200).send(character)

}



// 4. update character

const updateCharacter = async (req, res) => {

    let id = req.params.id

    const character = await Character.update(req.body, { where: { id: id }})

    res.status(200).send(character)

}



// 5. delete character by id

const deleteCharacter = async (req, res) => {

    let id = req.params.id
    
    await Character.destroy({ where: { id: id }} )

    res.status(200).send('Character is deleted !')

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
    addCharacter,
    getAllCharacters,
    getOneCharacter,
    updateCharacter,
    deleteCharacter,
    upload
    
}