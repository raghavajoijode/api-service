import { OTP_EXPIRY_MILLI_SECONDS } from './constants.js'

const thresholdDateTime = (generatedDate) => generatedDate + OTP_EXPIRY_MILLI_SECONDS;

const isExpired = (generatedDate, requestedDate) => {
    return (generatedDate + OTP_EXPIRY_MILLI_SECONDS) < requestedDate
};


export {
    thresholdDateTime,
    isExpired
};