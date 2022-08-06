import { Router } from 'express'
import { errorResponse, isExpired } from '../../utils/functions.js'
import defaultMiddleWare from '../../middlewares/default.js'
// middleware that is specific to this router
const router = Router()

router.use(defaultMiddleWare)

let OTPs = [];

router.route('/:mobileNumber')
    .get((req, res) => {
        try {
            let mobileNumber = req.params.mobileNumber;
            let requestedDate = new Date().getTime();
            let otpObject = OTPs.find(i => (i.mobileNumber === mobileNumber));
            if (!otpObject || isExpired(otpObject.generatedDate, requestedDate)) {
                const indexOfObject = OTPs.findIndex(object => object.mobileNumber === mobileNumber)
                indexOfObject !== -1 && OTPs.splice(indexOfObject, 1);

                otpObject = {
                    otp: Math.floor(100000 + Math.random() * 900000),
                    generatedDate: new Date().getTime(),
                    mobileNumber: mobileNumber
                }
                OTPs.push(otpObject);
            }
            res.send(otpObject)
        } catch (error) {
            console.log(error)
            errorResponse(res, error)
        }

    })

router.route('/validate/:mobileNumber')
    .get((req, res) => {
        try {
            let mobileNumber = req.params.mobileNumber;
            let requestedDate = new Date().getTime();
            let otp = req.query.otp;
            let item = OTPs.find(i => (i.mobileNumber === mobileNumber && i.otp == otp));
            if (!item) {
                res.status(400).json({ success: false, message: 'invalid request' })
                return;
            }

            if (isExpired(item.generatedDate, requestedDate)) {
                res.status(400).json({ success: false, message: 'OTP expired' })
                return
            }

            res.json({ success: true })
        } catch (error) {
            console.log(error)
            errorResponse(res, error)
        }
    })

router.route('/')
    .get((req, res) => {
        res.send(OTPs)
    })

export default router;