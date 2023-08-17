import { Router } from 'express';
import otpRouter from '../services/otp/index.js';
import authRouter from '../services/auth/index.js'
import fetchRouter from '../services/fetch/index.js';


const router = Router()

router
    .use('/otp', otpRouter)
    .use('/auth', authRouter)
    .use('/fetch', fetchRouter)
    // Add any other routes
    // .use(notFoundRouter)

export default router;
