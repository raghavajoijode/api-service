import { Router } from 'express'
import fetch from 'node-fetch'
import defaultMiddleWare from '../../middlewares/default.js'
import { validateCaptcha } from '../../middlewares/reCaptcha.js'
import { GOOGLE_RECAPTCHA_KEY, GOOGLE_RECAPTCHA_KEY_V2 } from '../../utils/constants.js'

// middleware that is specific to this router
const router = Router()

router.use(defaultMiddleWare)

router.route('/post')
    .get(validateCaptcha(GOOGLE_RECAPTCHA_KEY_V2), async (req, res) => {
        try {
            const body = {
                title: "foo",
                body: "bar",
                userId: 1
            }
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "post",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            })
            const json = await response.json();
            res.status(response.status).json(json);
        } catch (error) {
            next(error)
        }

    })

router.route('/get')
    .get(validateCaptcha(GOOGLE_RECAPTCHA_KEY), async (req, res) => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                headers: { "Content-Type": "application/json" }
            })
            const json = await response.json()
            res.status(response.status).json(json);
        } catch (error) {
            next(error)
        }
    })

router.route('/')
    .get((req, res) => {
        res.send(OTPs)
    })

export default router;