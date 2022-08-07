import { Router } from 'express';
import otpRouter from '../services/otp/index.js';
import fetchRouter from '../services/fetch/index.js';


const router = Router()

router
    .use('/otp', otpRouter)
    .use('/fetch', fetchRouter)
    // Add any other routes

export default router;
