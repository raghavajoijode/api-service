const SERVER_PORT = process.env.PORT || 3000;
const GOOGLE_RECAPTCHA_KEY = process.env.GOOGLE_RECAPTCHA_SERVER_KEY || '';
const GOOGLE_RECAPTCHA_KEY_V2  = process.env.GOOGLE_RECAPTCHA_SERVER_KEY_V2 || '';
const AUTH_JWT_KEY  = process.env.AUTH_JWT_KEY || 'key';
const AUTH_JWT_EXPIRY  = process.env.AUTH_JWT_EXPIRY || 'key';

const OTP_EXPIRY_MILLI_SECONDS = 10 * 60 * 1000

export {
    SERVER_PORT,
    OTP_EXPIRY_MILLI_SECONDS,
    GOOGLE_RECAPTCHA_KEY,
    GOOGLE_RECAPTCHA_KEY_V2,
    AUTH_JWT_KEY,
    AUTH_JWT_EXPIRY
}