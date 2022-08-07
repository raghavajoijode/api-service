import express from 'express'
import { SERVER_PORT } from './utils/constants.js'
import apiRouter from './routes/api.js'
import errorHandler, {notFoundHandler} from './middlewares/errorHandler.js'

const app = express();

app.use("/api", apiRouter)
// Any other routes
//app.use("*", notFoundRouter)
app.use(notFoundHandler) // 404
app.use(errorHandler) // any internal error

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}!`))