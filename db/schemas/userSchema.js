
  exports.loginSchema = {
    email: {
      in: ['body'],
      isEmail: true,
      notEmpty: true,
      errorMessage: 'EMAIL_IS_REQUIRED'
    },
    password: {
      in: ['body'],
      notEmpty: true,
      errorMessage: 'PASSWORD_IS_REQUIRED',
      isLength: {
        errorMessage: 'PASSWORD_REQUIREMENTS',
        options: { min: 8 }
      }
    }
  };