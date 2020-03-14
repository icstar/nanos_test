var router = require('express').Router();

router.use('/', require('./users'));
router.use('/admin', require('./admin'));
router.use('/profiles', require('./profiles'));
router.use('/lists', require('./lists'));

router.use(function(err, req, res, next){

  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }
  if(err.name == "UnauthorizedError"){
    return res.status(200).json({
      success:true,
      redirectUrl: '/signin'
    });
  }
  return next(err);
});

module.exports = router;