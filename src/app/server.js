import express from 'express'
import { SERVER_PORT } from './utils/constants.js'
import apiRouter from './routes/api.js'
import notFoundRouter from './services/404/index.js'

const app = express();

app.use("/api", apiRouter)
// Any other routes
app.use("*", notFoundRouter)

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}!`))