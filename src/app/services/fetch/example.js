import { Router } from 'express'
import fetch from 'node-fetch'
import { errorResponse, isExpired } from '../../utils/functions.js'
import defaultMiddleWare from '../../middlewares/default.js'

// middleware that is specific to this router
const router = Router()

router.use(defaultMiddleWare)

router.route('/post')
    .get(async (req, res) => {
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
            console.log(error)
            errorResponse(res, error)
        }

    })

router.route('/get')
    .get(async (req, res) => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                headers: { "Content-Type": "application/json" }
            })
            const json = await response.json()
            res.status(response.status).json(json);
        } catch (error) {
            console.log(error)
            errorResponse(res, error)
        }
    })

router.route('/')
    .get((req, res) => {
        res.send(OTPs)
    })

export default router;