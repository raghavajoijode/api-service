import fetch from 'node-fetch'

// Refer - https://developers.google.com/recaptcha/docs/verify
const validateCaptcha = (key) => async (req, res, next) => {
    try {
        let response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            body: `secret=${key}&response=${req.headers['g-recaptcha-response']}`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        const json = await response.json();
        console.log("Validation-Response:: ", json)
        const status = json.success
        if (status) {
            next()
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        next(error)
    }
}

export { validateCaptcha };