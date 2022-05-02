const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const { characterRouter, genreRouter, moviecharacterRouter, movieRouter} = require('./routes')
app.use('/characters', characterRouter)
app.use('/genres', genreRouter)
app.use('/moviecharacters', moviecharacterRouter)
app.use('/movies', movieRouter)

//static Images Folder

app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})