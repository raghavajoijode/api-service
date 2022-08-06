import { Router } from 'express'

const router = Router()

router
    .route("*")
    .all((req, res) => {
        res.sendStatus(404)
    })

export default router