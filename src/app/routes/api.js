import { Router } from 'express';
import otpRouter from '../services/otp/index.js';
import notFoundRouter from '../services/404/index.js'
import authRouter from '../services/auth/index.js'


const router = Router()

router
    .use('/otp', otpRouter)
    .use('/auth', authRouter)
    // Add any other routes
    .use('*', notFoundRouter)

export default router;
