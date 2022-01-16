import { NextFunction, Request, Response } from "express";

import { validationResult } from 'express-validator'
import { ValidationError } from "../errors/validation-error";

const validate = (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedError = errors.array().map(el => ({message: el.msg, field: el.param}))
    throw new ValidationError(formattedError);
  }
  next();
}

export { validate }