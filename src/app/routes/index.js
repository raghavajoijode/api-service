const router = require('express').Router()

router
    .use('/otp', require('../modules/otp'))
    // Add any other routes
    .use('*', require('../modules/404'))

module.exports = router;
