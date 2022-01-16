import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/not-found-error";

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw new NotFoundError('Route Not found');
}

export { notFound };