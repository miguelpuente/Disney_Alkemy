const logger = ( req = request, res = response, next ) => {

    console.log("-----req-----------")
    console.log(req.method)
    console.log(req.usuario.id)
    console.log(req.body)
    console.log("-----req-----------")

    // for( let key of Object.keys(models.Modelname.attributes))   {
    //     columns.push({
    //         name:key,
    //         type:models.Modelname.attributes[key].type.key
    //     });
    // }

    next();

}

module.exports = {
    logger
}