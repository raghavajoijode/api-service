const { SERVER_PORT } = require('./utils/constants')
const app = require('express')();

app.use("/api", require('./routes'))
// Any other routes
app.use("*", require('./modules/404'))

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}!`))