import bodyParser from 'body-parser'
import cors from 'cors'
import { Router } from 'express';

const defaultMiddleWare = Router()

defaultMiddleWare.use(cors());
defaultMiddleWare.use(bodyParser.urlencoded({ extended: false }));
defaultMiddleWare.use(bodyParser.json());

export default defaultMiddleWare;
