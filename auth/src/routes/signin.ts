
import { Request, Response, Router } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { Password } from "../services/password";

const router = Router();

router.post('/api/users/signin', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Please supply a password')
], validateRequest, async (req: Request, res: Response) => {

  const {email, password} = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    throw new BadRequestError('Invalid Email');
  }

  const passwordMatch = await Password.compare(userExists.password, password);

  if (!passwordMatch) {
    throw new BadRequestError('Password does not match');
  }
  // Generate JTW
  const userJwt= jwt.sign({
    id: userExists._id,
    email: userExists.email
  },
  process.env.JWT_KEY!
  );

  // store it on session object
  req.session = {
    jwt: userJwt
  };
  res.status(200).json(userExists);
});

export {router as signinRouter};

