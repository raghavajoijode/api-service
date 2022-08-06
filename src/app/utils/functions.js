import { OTP_EXPIRY_MILLI_SECONDS } from './constants.js'

const errorResponse = (res, e) => res.status(500).json({ error: e.message });
const thresholdDateTime = (generatedDate) => generatedDate + OTP_EXPIRY_MILLI_SECONDS;

const isExpired = (generatedDate, requestedDate) => {
    return (generatedDate + OTP_EXPIRY_MILLI_SECONDS) < requestedDate
};


export {
    errorResponse,
    thresholdDateTime,
    isExpired
};