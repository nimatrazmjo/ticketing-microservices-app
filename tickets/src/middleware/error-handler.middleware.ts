import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.statusCode).json(err.serializeError());
};

export { errorHandler };
