const actividadController = require('./actividadController');
const areaController = require('./areaController');
const categoriaController = require('./categoriaController');



module.exports = {
    ...actividadController,
    ...areaController,
    ...categoriaController
}