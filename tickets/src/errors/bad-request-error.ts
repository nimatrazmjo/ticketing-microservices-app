import { IErrorResponse } from "../types/error-response";
import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 401;

  constructor(public message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  
  serializeError(): IErrorResponse[] {
      return [{ message: this.message}];
  }
}