import { Router } from 'express';
import otpRouter from '../services/otp/index.js';
import fetchRouter from '../services/fetch/index.js';
import notFoundRouter from '../services/404/index.js'


const router = Router()

router
    .use('/otp', otpRouter)
    .use('/fetch', fetchRouter)
    // Add any other routes
    .use('*', notFoundRouter)

export default router;
