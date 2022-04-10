import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

declare global {
  namespace Express {
    interface Request {
      currentUser?: JwtPayload
    }
  }
}

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  if (!req.session?.jwt) {
    throw new NotAuthorizedError();
  }
  const payload = (jwt.verify(req.session?.jwt,process.env.JWT_KEY!) as JwtPayload);  
  req.currentUser = payload;
  next();
}

export { authMiddleware }