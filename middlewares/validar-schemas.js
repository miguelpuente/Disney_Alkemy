const { validationResult, checkSchema } = require('express-validator');
// const logger = require('../logger');
const { validateError } = require('../constants/errors');

const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
//   if (err.isEmpty()) {
//     return next();
//   }

  if (!errors.isEmpty() ) {
     return res.status(400).json( errors );
}
//   logger.error(`An error ocurred trying validate schema: ${err.mapped()}`);
//   console.error(`An error ocurred trying validate schema: ${err.mapped()}`);

//   return next(validateError(err.mapped()));
  return next();
};

const validateSchema = schema => checkSchema(schema);

module.exports = schema => [validateSchema(schema), checkValidationResult];