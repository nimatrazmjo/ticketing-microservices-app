import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";
export declare const ErrorHandler: (err: CustomError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
