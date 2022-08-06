const router = require('express').Router()

router
    .route("*")
    .all((req, res) => {
        res.sendStatus(404)
    })

module.exports = router