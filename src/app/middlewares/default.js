
const bodyParser = require('body-parser');
const defaultMiddleWare = require('express').Router()

defaultMiddleWare.use(require('cors')());
defaultMiddleWare.use(bodyParser.urlencoded({ extended: false }));
defaultMiddleWare.use(bodyParser.json());

module.exports = defaultMiddleWare;
