const errorHandler = (err, req, res, next) => {
    console.error(err)
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: e.message })
}

const notFoundHandler = (req, res) => {
    res.sendStatus(404)
}

export default errorHandler;
export { notFoundHandler }