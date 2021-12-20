import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

export const ErrorHandler = (
  err: CustomError, 
  req: Request, 
  res: Response, 
  next: NextFunction) => {
    if (err instanceof RequestValidationError) {
      return res.status(400).json({errors: err.serializeError()});
    }

    if (err instanceof DatabaseConnectionError) {
        return res.status(500).json({errors: err.serializeError()})
    }
    res.status(err.statusCode).json({
      errors: err.serializeError()
    });
}