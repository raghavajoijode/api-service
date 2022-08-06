import { Router } from 'express';
import otpRouter from '../services/otp/index.js';
import notFoundRouter from '../services/404/index.js'


const router = Router()

router
    .use('/otp', otpRouter)
    // Add any other routes
    .use('*', notFoundRouter)

export default router;
