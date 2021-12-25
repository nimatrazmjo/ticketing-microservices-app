import { Router, Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { BadRequestError } from "../errors/bad-request-error";
import { RequestValidationError } from "../errors/request-validation-error";
import { User } from "../models/user";
const router = Router();

router.post('/api/users/signup',[
  body('email')
  .isEmail()
  .withMessage('Email must be valid'),
 body('password')
  .trim()
  .isLength({min: 4, max: 20})
  .withMessage('Password must be between 4 and 20 characters') 
], async (req: Request, res: Response) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const {email, password} = req.body;
  const existsUser = await User.findOne({email});
  if (existsUser) {
    throw new BadRequestError('Email already exists');
  }
  const user = User.build({email, password});
  await user.save();
  res.status(201).json(user);

});

export {router as signupRouter};

