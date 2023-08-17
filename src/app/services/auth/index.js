import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import defaultMiddleWare from '../../middlewares/default.js';
import verifyToken from '../../services/auth/middleware.js'
import {AUTH_JWT_EXPIRY, AUTH_JWT_KEY} from "../../utils/constants.js";

// middleware that is specific to this router
const router = Router()
router.use(defaultMiddleWare)

let Users = [];

router.route('/register')
    .post((req, res, next) => {
        try {
            const { firstName, lastName, email, password } = req.body;

            if (!(email && password && firstName && lastName)) {
                return res.status(400).send("All input is requireddd");
                
            }

            const oldUser = Users.find(i => (i.email === email?.toLowerCase()));

            if (oldUser) {
                return res.status(409).send("User Already Exist. Please Login");
            }

            const encryptedPassword = bcrypt.hashSync(password, 10);

            // Create user in our database
            const user = {
                id: uuidv4(),
                firstName,
                lastName,
                email: email.toLowerCase(),
                password: encryptedPassword,
            };

            const token = jwt.sign(
                { uid: user.id, email },
                AUTH_JWT_KEY,
                {
                    expiresIn: AUTH_JWT_EXPIRY,
                }
            );

            user.token = token;
            Users.push(user);
            let clonedUser = { ...user };
            delete clonedUser.password
            return res.status(201).json(clonedUser);
        } catch (error) {
            next(error)
        }
    });

router.route('/login')
    .post((req, res, next) => {
        try {
            const { email, password } = req.body;
            if (!(email && password)) {
                return res.status(400).send("All input is required");
            }

            const user = Users.find(i => (i.email === email));

            if (user && (bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                    { uid: user.id, email },
                    AUTH_JWT_KEY,
                    {
                        expiresIn: AUTH_JWT_EXPIRY,
                    }
                );
                user.token = token;
                let clonedUser = { ...user };
                delete clonedUser.password
                return res.status(200).json(clonedUser);
            }
            return res.status(400).send("Invalid Credentials");
        } catch (error) {
            next(error)
        }
    });

router.route('/')
    .get(verifyToken, (req, res) => {
        res.send(Users)
    })

export default router;