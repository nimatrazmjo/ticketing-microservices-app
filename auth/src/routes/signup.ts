import { Router, Request, Response } from "express";
import { body } from 'express-validator';
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";
import jwt from 'jsonwebtoken';
import { validateRequest } from "../middlewares/validate-request";
const router = Router();

router.post('/api/users/signup',[
  body('email')
  .isEmail()
  .withMessage('Email must be valid'),
 body('password')
  .trim()
  .isLength({min: 4, max: 20})
  .withMessage('Password must be between 4 and 20 characters') 
], validateRequest, async (req: Request, res: Response) => { 

  const {email, password} = req.body;
  const existsUser = await User.findOne({email});
  if (existsUser) {
    throw new BadRequestError('Email already exists');
  }
  const user = User.build({email, password});

  await user.save();
  // Generate JTW
  const userJwt= jwt.sign({
    id: user._id,
    email: user.email
  },
  process.env.JWT_KEY!
  );

  // store it on session object
  req.session = {
    jwt: userJwt
  };
  res.status(201).json(user);

});

export {router as signupRouter};

