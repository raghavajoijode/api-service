import { Router } from 'express'
import defaultMiddleWare from '../../middlewares/default.js'
import exampleFetchRouter from './example.js'

// middleware that is specific to this router
const router = Router()

router.use(defaultMiddleWare)

router.use('/example', exampleFetchRouter);

export default router;