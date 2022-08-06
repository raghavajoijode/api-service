
const constants = require('./constants');

const errorResponse = (res, e) => res.status(500).json({ error: e.message });
const thresholdDateTime = (generatedDate) => generatedDate + constants.OTP_EXPIRY_MILLI_SECONDS;

const isExpired = (generatedDate, requestedDate) => {
    return (generatedDate + constants.OTP_EXPIRY_MILLI_SECONDS) < requestedDate
};


module.exports = Object.freeze({
    errorResponse,
    thresholdDateTime,
    isExpired
});