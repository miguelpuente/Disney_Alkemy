const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const db = require('../db/connection');

const { AUTH_PATH,
        USUARIOS_PATH,
        UPLOADS_PATH,
     } = require('../constants/endpoint');

const errors =require('../middlewares/errors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.usuariosPath = AUTH_PATH;
        this.authPath = USUARIOS_PATH;
        this.uploads = UPLOADS_PATH;


        // Coneccion a base de datos
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Base de datos online');

        } catch (error) {
            throw new Error( error );
        }
    }

    middlewares() {
        
        // CORS
        this.app.use( cors() );
        
        // Lectura y Parseo del Body
        this.app.use( express.json() );
        
        // Directorio publico
        this.app.use( express.static('public') );

        this.app.use( errors.handle );

        // Carga de Archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes() {

        this.app.use( this.authPath, require('../routes/authRoute'));
        this.app.use( this.uploads, require('../routes/uploads'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port );
        });
    }
}

module.exports = Server;