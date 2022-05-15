const { validationResult, checkSchema } = require('express-validator');
const { validateError } = require('../constants/errors');

const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty() ) {
     return res.status(400).json( errors );
}
  return next();
};

const validateSchema = schema => checkSchema(schema);

module.exports = schema => [validateSchema(schema), checkValidationResult];