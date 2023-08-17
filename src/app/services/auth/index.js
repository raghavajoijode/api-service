import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { errorResponse, isExpired } from '../../utils/functions.js';
import defaultMiddleWare from '../../middlewares/default.js';
import verifyToken from '../../services/auth/middleware.js'

// middleware that is specific to this router
const router = Router()
router.use(defaultMiddleWare)

let Users = [];

router.route('/register')
    .post((req, res) => {
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
                "key",
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;
            Users.push(user);
            let clonedUser = { ...user };
            delete clonedUser.password
            return res.status(201).json(clonedUser);
        } catch (error) {
            console.log(error);
            errorResponse(res, error)
        }
    });

router.route('/login')
    .post((req, res) => {
        try {
            const { email, password } = req.body;
            if (!(email && password)) {
                return res.status(400).send("All input is required");
            }

            const user = Users.find(i => (i.email === email));

            if (user && (bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                    { uid: user.id, email },
                    "key",
                    {
                        expiresIn: "2h",
                    }
                );
                user.token = token;
                let clonedUser = { ...user };
                delete clonedUser.password
                return res.status(200).json(clonedUser);
            }
            return res.status(400).send("Invalid Credentials");
        } catch (error) {
            console.log(err);
            errorResponse(res, error)
        }
    });

router.route('/')
    .get(verifyToken, (req, res) => {
        res.send(Users)
    })

export default router;