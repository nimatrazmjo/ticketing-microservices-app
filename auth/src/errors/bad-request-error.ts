import { CustomError } from "./custom-error";
import { ErrorResponseType } from "./error-response-type";


export class BadRequestError extends CustomError {
  statusCode = 401;

  constructor(public message: string) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  
  serializeError(): ErrorResponseType[] {
      return [{ message: this.message}];
  }
}