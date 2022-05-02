const db = require('../models')

// create main Model
const Moviecharacter = db.moviecharacters
const Movie = db.movies
const Character = db.characters

// main work



// 1. create moviecharacter

const addMoviecharacter = async (req, res) => {

    let info = {
        movie_id: req.body.movie_id,
        character_id: req.body.character_id
    }

    const moviecharacter = await Moviecharacter.create(info)
    res.status(200).send(moviecharacter)
    console.log(moviecharacter)

}



// 2. get all moviecharacters

const getAllMoviecharacters = async (req, res) => {

    let moviecharacters = await Moviecharacter.findAll({})
    res.status(200).send(moviecharacters)

}



// 3. get single moviecharacter

const getOneMoviecharacter = async (req, res) => {

    let id = req.params.id
    let moviecharacter = await Moviecharacter.findOne({ where: { id: id }})
    res.status(200).send(moviecharacter)

}



// 4. update moviecharacter

const updateMoviecharacter = async (req, res) => {

    let id = req.params.id

    const moviecharacter = await Moviecharacter.update(req.body, { where: { id: id }})

    res.status(200).send(moviecharacter)

}



// 5. delete moviecharacter by id

const deleteMoviecharacter = async (req, res) => {

    let id = req.params.id
    
    await Moviecharacter.destroy({ where: { id: id }} )

    res.status(200).send('Moviecharacter is deleted !')

}



module.exports = {
    addMoviecharacter,
    getAllMoviecharacters,
    getOneMoviecharacter,
    updateMoviecharacter,
    deleteMoviecharacter

}